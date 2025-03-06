"use client";

import { Search } from "lucide-react";
import { Input } from "@components/shadcnui/input";

export function SearchInput() {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search players or teams..."
        className="w-full pl-8"
      />
    </div>
  );
}
