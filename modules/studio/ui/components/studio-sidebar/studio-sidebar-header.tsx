import { SidebarHeader } from "@/components/ui/sidebar";
import { UserAvatar } from "@/components/user-avatar";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export const StudioSidebarHeader = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <SidebarHeader className="flex items-center justify-center pb-4">
      <Link href="/users/current">
        <UserAvatar
          imageUrl={user?.imageUrl}
          name={user?.fullName || "User"}
          className="size-[112px] hover:opacity-80 transition-opacity"
        />
      </Link>
    </SidebarHeader>
  );
};
