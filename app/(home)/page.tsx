import { HydrateClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const runtime = "nodejs";

export default async function Home() {
  try {
    await trpc.hello.prefetch({
      text: "Antonio",
    });
  } catch (error) {
    console.error("Error during prefetch:", error);
    // You might choose to handle the error (e.g., return a fallback UI or rethrow)
  }

  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          Page component render
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
