import { ClerkProvider } from "@clerk/nextjs";
import { TRPCProvider } from "@/trpc/client";
import { ReactNode } from "react";

export function TestWrapper({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <TRPCProvider>{children}</TRPCProvider>
    </ClerkProvider>
  );
}
