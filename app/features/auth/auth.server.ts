import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { sessionStorage } from "./session.server";
import invariant from "tiny-invariant";

export interface UserData {
	id: string;
	name?: string;
	username: string;
	email: string;
}

export const authenticator = new Authenticator<UserData>(sessionStorage);

authenticator.use(
	new FormStrategy(async ({ form }) => {
		const email = form.get("email");
		const password = form.get("password");

		invariant(typeof email === "string", "email must be a string");
		invariant(email.length > 0, "email must not be empty");

		invariant(typeof password === "string", "password must be a string");
		invariant(password.length > 0, "password must not be empty");

		const user = await login(email, password);
		console.log(`user: ${user.username}`);
		return user;
	}),
	"user-pass",
);

// This function should be completed with proper logic
const login = (email: string, password: string) => {
	// find a user and return it's data
	// db.findUnique... where...
	const user = {
		id: "1231asdas",
		name: "Test Subject",
		username: "LargeAndy",
		email: "andyL@email.com",
	};
	return user;
};
