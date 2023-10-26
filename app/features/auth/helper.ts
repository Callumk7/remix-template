import { authenticator } from "./auth.server";

export const auth = async (request: Request) => {
	const session = await authenticator.isAuthenticated(request, {
		failureRedirect: "/sign-in",
	});

	return session;
};
