'use client';

import { trpc } from "@/trpc/client";

const Home = () => {
  const { data } = trpc.hello.useQuery({
    text: "Zaid",
  });

  return <div className="pl-3">Client components says: {data?.greeting}</div>;
};

export default Home;
