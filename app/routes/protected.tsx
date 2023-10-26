import { auth } from "@/features/auth/helper";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await auth(request);

  return session;
}


export default function ProtectedPage() {
  const session = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>This is a protected page</h1>
      <p>Welcome <span>{session.fullName}</span></p>
    </div>
  );
}
