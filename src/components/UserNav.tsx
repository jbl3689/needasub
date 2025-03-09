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
import { LoginDialog } from "./auth/LoginDialog";

/**
 * Renders a user navigation component that adapts its UI based on the authentication state.
 *
 * When the user is not logged in, it displays a "Sign In" button (with visual effect) that opens a login dialog.
 * Upon successful login, the component renders a dropdown menu with user account options including profile, listings, messages, settings, and a logout action.
 *
 * @returns The JSX element representing the navigation UI.
 */
export function UserNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  if (!isLoggedIn) {
    return (
      <>
        <Button
          variant="outline"
          onClick={() => setShowLoginDialog(true)}
          effect="gooeyRight"
        >
          Sign In
        </Button>
        <LoginDialog
          open={showLoginDialog}
          onOpenChange={setShowLoginDialog}
          onSuccess={() => setIsLoggedIn(true)}
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
            <AvatarFallback>JD</AvatarFallback>
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
        <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
