import { authenticator } from "@/services/auth.server";

export const auth = async (request: Request) => {
	const session = await authenticator.isAuthenticated(request, {
		failureRedirect: "/login",
	});

	return session;
};
