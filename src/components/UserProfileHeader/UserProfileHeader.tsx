"use client";

import { X } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@components/shadcnui/avatar";
import { Button } from "@components/shadcnui/button";
import { Badge } from "@components/shadcnui/badge";

interface UserProfileHeaderProps {
  name: string;
  email: string;
  avatarUrl?: string | null;
  badge?: {
    text: string;
    variant?: "default" | "outline" | "secondary" | "destructive";
  };
  onClose: () => void;
  actions?: React.ReactNode;
}

export function UserProfileHeader({
  name,
  email,
  avatarUrl,
  badge,
  onClose,
  actions,
}: UserProfileHeaderProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .substring(0, 2);

  return (
    <div className="relative">
      {/* Header Image */}
      <div className="relative w-full h-24 bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-200">
        <Button
          className="absolute p-1 text-white rounded-full top-2 right-2 bg-black/10 hover:bg-black/20"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Avatar and Actions */}
      <div className="flex items-center justify-between px-5 -mt-10">
        <Avatar className="w-16 h-16 border-4 border-black">
          <AvatarImage src={avatarUrl || ""} alt={name} />
          <AvatarFallback className="text-white bg-primary">
            {initials || "??"}
          </AvatarFallback>
        </Avatar>

        <div className="flex gap-2">{actions}</div>
      </div>

      {/* User Name and Status */}
      <div className="flex items-center gap-2 px-5 mt-2">
        <h2 className="text-xl font-bold">{name}</h2>
        {badge && (
          <Badge
            className="h-5 px-2 border bg-primary/20 text-primary border-primary/20"
            variant={badge.variant}
          >
            {badge.text}
          </Badge>
        )}
      </div>

      {/* User Email */}
      <p className="px-5 text-sm text-zinc-400">{email}</p>
    </div>
  );
}
