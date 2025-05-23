import type { Metadata } from "next";
// Remove Inter import temporarily
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";

// Remove inter initialization
export const metadata: Metadata = {
  title: "NewTube",
  description: "Generated by create next app",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en">
        <body className="antialiased">
          <TRPCProvider>
            <Toaster richColors />
            {children}
          </TRPCProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
