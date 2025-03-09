"use client";

import { ReactNode } from "react";
import { Button } from "@components/shadcnui/button";

interface DialogFooterProps {
  onCancel: () => void;
  onSave: () => void;
  saveText?: string;
  cancelText?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export function DialogFooter({
  onCancel,
  onSave,
  saveText = "Save changes",
  cancelText = "Cancel",
  disabled = false,
  children,
}: DialogFooterProps) {
  return (
    <div className="flex justify-end gap-2 px-5 py-3 mt-2 border-t border-zinc-800">
      {children}
      <Button
        variant="outline"
        className="text-white bg-zinc-900 border-zinc-700 hover:bg-zinc-800"
        onClick={onCancel}
      >
        {cancelText}
      </Button>
      <Button
        className="bg-primary hover:bg-primary/90"
        onClick={onSave}
        disabled={disabled}
      >
        {saveText}
      </Button>
    </div>
  );
}
