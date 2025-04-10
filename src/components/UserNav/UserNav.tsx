"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@components/shadcnui/avatar";
import { Button } from "@components/shadcnui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/shadcnui/dropdown-menu";
import { useState } from "react";
import Link from "next/link";
import { LoginDialog } from "@components/(auth)/LoginDialog";
import { useAuth } from "@hooks/useAuth";
import { useRouter } from "next/navigation";
import { createClient } from "@lib/supabase/client";

/**
 * Renders a user navigation component that adapts its UI based on the authentication state.
 *
 * When the user is not logged in, it displays a "Sign In" button (with visual effect) that opens a login dialog.
 * Upon successful login, the component renders a dropdown menu with user account options including profile, listings, messages, settings, and a logout action.
 *
 * @returns The JSX element representing the navigation UI.
 */
export function UserNav() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const handleLogOut = async () => {
    const supabase = createClient;
    await supabase.auth.signOut();
    router.refresh(); // Refresh to update auth state in the UI
  };

  if (!isAuthenticated) {
    return (
      <>
        <Button variant="ghost" effect="gooeyRight">
          <Link href="/login">Login/Signup</Link>
        </Button>
        <LoginDialog
          open={showLoginDialog}
          onOpenChange={setShowLoginDialog}
          onSuccess={() => router.refresh()}
        />
      </>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative w-8 h-8 rounded-full">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg" alt="@user" />
            {/* <AvatarFallback>JD</AvatarFallback> */}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">
              john.doe@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>My Listings</DropdownMenuItem>
          <DropdownMenuItem>Messages</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogOut}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
