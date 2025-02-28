"use client";

import { trpc } from "@/trpc/client";
import { DEFAULT_LIMIT } from "@/constants";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { InfiniteScroll } from "@/components/infinite-scroll";

export const VideoSection = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <VideoSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

const VideoSectionSuspense = () => {
  const [data, query] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return (
    <div>
      {JSON.stringify(data)}
      <InfiniteScroll
      isManual
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
      />
    </div>
  );
};
