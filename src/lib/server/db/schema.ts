import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
});

export const sessions = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull(),
});

export type Session = typeof sessions.$inferSelect;
export type User = typeof users.$inferSelect;
