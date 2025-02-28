import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import React from "react";

interface InfiniteScrollProps {
  isManual?: boolean;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export const InfiniteScroll = ({
  isManual = false,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: InfiniteScrollProps) => {
  const { targetRef } = useIntersectionObserver();

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div ref={targetRef} className="h-1" />
    </div>
  );
};
