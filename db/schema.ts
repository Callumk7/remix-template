import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
	id: integer("id").primaryKey(),
	fullName: text("full_name"),
	email: text("email").notNull(),
	password: text("password").notNull(),
});
