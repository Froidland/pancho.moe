import { env } from '$env/dynamic/private';
import {
	createSession,
	generateSessionToken,
	github,
	setSessionTokenCookie,
} from '$lib/server/auth.js';
import { db } from '$lib/server/db/index.js';
import { users } from '$lib/server/db/schema.js';
import { json } from '@sveltejs/kit';
import { ArcticFetchError, OAuth2RequestError } from 'arctic';
import { eq } from 'drizzle-orm';
import type { RequestEvent } from '../$types';

export async function GET(event: RequestEvent) {
	const storedState = event.cookies.get('github_oauth_state');
	const state = event.url.searchParams.get('state');
	const code = event.url.searchParams.get('code');

	if (!state || !storedState || state !== storedState || !code) {
		return json({ error: 'invalid state or code' }, { status: 400 });
	}

	try {
		const tokens = await github.validateAuthorizationCode(code);
		const res = await fetch('https://api.github.com/user', {
			headers: {
				Authorization: `Bearer ${tokens.accessToken()}`,
			},
		});

		if (!res.ok) {
			return json({ error: 'failed to fetch user' }, { status: 500 });
		}

		const user = (await res.json()) as PartialGithubUser;
		if (user.id.toString() !== env.GITHUB_USER_ID) {
			return json({ error: 'you are not authorized to use this application' }, { status: 403 });
		}

		const [existingUser] = await db
			.select()
			.from(users)
			.where(eq(users.githubId, user.id.toString()));

		if (existingUser) {
			const sessionToken = generateSessionToken();
			const session = await createSession(sessionToken, existingUser.id);
			setSessionTokenCookie(event, sessionToken, session.expiresAt);

			return new Response(null, {
				status: 302,
				headers: {
					Location: '/',
				},
			});
		}

		const [newUser] = await db
			.insert(users)
			.values({
				email: user.email,
				githubId: user.id.toString(),
			})
			.returning({ id: users.id });

		const session = await createSession(generateSessionToken(), newUser.id);
		setSessionTokenCookie(event, session.id, session.expiresAt);

		return new Response(null, {
			status: 302,
			headers: {
				Location: '/',
			},
		});
	} catch (err) {
		if (err instanceof OAuth2RequestError) {
			return json({ error: 'invalid code' }, { status: 400 });
		}

		console.error(err);
		if (err instanceof ArcticFetchError) {
			return json({ error: 'failed to fetch token' }, { status: 500 });
		}

		return json({ error: 'unexpected error' }, { status: 500 });
	}
}

type PartialGithubUser = {
	login: string;
	id: number;
	email: string;
};
