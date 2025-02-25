"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { PlusCircle } from "lucide-react";
import { CreateListingDialog } from "./create-listing-dialog";

export function CreateListingButton() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create Listing
      </Button>
      <CreateListingDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
