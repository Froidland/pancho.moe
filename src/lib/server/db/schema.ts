import { sql } from 'drizzle-orm';
import { pgTable } from 'drizzle-orm/pg-core';

const MAX_URL_LENGTH = 2083;

export const users = pgTable('users', (t) => ({
	id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
	email: t.text().notNull().unique(),
	githubId: t.text().notNull().unique(),
}));

export const sessions = pgTable('sessions', (t) => ({
	id: t.text().primaryKey(),
	userId: t
		.integer()
		.notNull()
		.references(() => users.id),
	expiresAt: t.timestamp({ withTimezone: true, mode: 'date' }).notNull(),
}));

export const projects = pgTable('projects', (t) => ({
	id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
	title: t.varchar({ length: 255 }).notNull(),
	description: t.text().notNull(),
	// TODO: Maybe use a jsonb array and store the name, and a url to the technology's website (and maybe other things or just a separate table)
	technologies: t
		.varchar({ length: 255 })
		.array()
		.notNull()
		.default(sql`ARRAY[]::VARCHAR[]`),
	url: t.varchar({ length: MAX_URL_LENGTH }),
	repositoryUrl: t.varchar({ length: MAX_URL_LENGTH }),
	priority: t.integer().notNull().default(0),
}));

export type User = typeof users.$inferSelect;
export type Session = typeof sessions.$inferSelect;
export type Project = typeof projects.$inferSelect;
