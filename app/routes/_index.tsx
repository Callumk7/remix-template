import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="mx-auto mt-10 w-4/5 text-center">
      <h1 className="text-5xl font-bold">Lets get Started</h1>
    </div>
  );
}
