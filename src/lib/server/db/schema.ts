import { pgTable } from 'drizzle-orm/pg-core';

export const users = pgTable('users', (t) => ({
	id: t.text().primaryKey(),
	age: t.integer(),
}));

export const sessions = pgTable('sessions', (t) => ({
	id: t.text().primaryKey(),
	userId: t
		.text()
		.notNull()
		.references(() => users.id),
	expiresAt: t.timestamp({ withTimezone: true, mode: 'date' }).notNull(),
}));

export type Session = typeof sessions.$inferSelect;
export type User = typeof users.$inferSelect;
