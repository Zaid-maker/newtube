"use client";

import { trpc } from "@/trpc/client";
import React from "react";

interface FormSectionProps {
  videoId: string;
}

export const FormSection = ({ videoId }: FormSectionProps) => {
  const [video] = trpc.studio.getOne.useSuspenseQuery({ id: videoId });

  return <div>{JSON.stringify(video)}</div>;
};
