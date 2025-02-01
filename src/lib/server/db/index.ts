import { drizzle } from 'drizzle-orm/postgres-js';
import { env } from '$env/dynamic/private';
import * as schema from './schema';

export const db = drizzle({
	connection: {
		url: env.DATABASE_URL,
	},
	casing: 'snake_case',
	schema,
});
