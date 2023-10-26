import { db } from "db";
import { users } from "./schema";

const seedUsers = [
	{
		fullName: "Tom Thumb",
		email: "tom@email.com",
		password: "passW00rd",
	},
	{
		fullName: "Alice Wonder",
		email: "alice@email.com",
		password: "passW00rd",
	},
	{
		fullName: "Callum Kloos",
		email: "callum@email.com",
		password: "passW00rd",
	},
	{
		fullName: "Martin O",
		email: "martin@email.com",
		password: "passW00rd",
	},
	{
		fullName: "Emile Smith",
		email: "emile@email.com",
		password: "passW00rd",
	},
];

const seededUsers = await db.insert(users).values(seedUsers);
console.log(seededUsers);
