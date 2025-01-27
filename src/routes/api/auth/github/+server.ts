import { github } from '$lib/server/auth.js';
import { generateState } from 'arctic';

export async function GET({ cookies }) {
	const state = generateState();
	const scopes = ['user:email'];

	cookies.set('github_oauth_state', state, { path: '.' });

	const url = github.createAuthorizationURL(state, scopes);

	return new Response(null, {
		status: 302,
		headers: {
			Location: url.toString(),
		},
	});
}
