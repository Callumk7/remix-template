import { authenticator } from "@/features/auth/auth.server";
import { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/",
    failureRedirect: "/sign-in",
  });
};

export default function SignInPage() {
  return (
    <div>
      <form method="POST">
        <input name="email" type="text" placeholder="enter your email" />
        <input name="password" type="password" placeholder="enter your password" />
        <button>Sign In</button>
      </form>
    </div>
  );
}
