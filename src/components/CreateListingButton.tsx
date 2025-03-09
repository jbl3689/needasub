"use client";

import { useState } from "react";
import { Button } from "@components/shadcnui/button";
import { PlusCircle } from "lucide-react";
import { CreateListingDialog } from "./CreateListingDialog";

export function CreateListingButton() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setDialogOpen(true)} effect="gooeyRight">
        <PlusCircle className="w-4 h-4 mr-2" />
        Create Listing
      </Button>
      <CreateListingDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
