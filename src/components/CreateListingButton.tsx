"use client";

import { useState } from "react";
import { Button } from "@components/shadcnui/button";
import { PlusCircle } from "lucide-react";
import { CreateListingDialog } from "./CreateListingDialog";

/**
 * Renders a button that opens the Create Listing dialog.
 *
 * This component displays a button with an accompanying icon and the label "Create Listing". When the button is clicked, it triggers an internal state change that opens a modal dialog for creating a new listing. The button also applies a "gooeyRight" visual effect on click.
 *
 * @returns The component containing both the clickable button and the dialog for listing creation.
 */
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
