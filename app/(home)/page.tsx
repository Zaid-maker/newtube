import { trpc } from "@/trpc/server";

export default async function Home() {
  const data = await trpc.hello({
    text: "Zaid",
  });

  return <div className="pl-3">Client components says: {data.greeting}</div>;
}
