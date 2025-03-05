import { trpc } from "@/trpc/server";
import React from "react";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{
    videoId: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { videoId } = await params;

  void trpc.studio.getOne({
    id: videoId,
  });

  return <div>Page</div>;
};

export default Page;
