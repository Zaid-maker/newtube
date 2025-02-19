import { trpc } from "@/trpc/client";

const Home = () => {
  const { data } = trpc.hello.useQuery({
    text: "Zaid",
  });

  return <div className="pl-3">I will load videos in future</div>;
};

export default Home;
