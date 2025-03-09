"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@components/shadcnui/dialog";
import { Button } from "@components/shadcnui/button";
import { UserProfileHeader } from "@components/UserProfileHeader";
import { StatsGrid } from "@components/StatsGrid";
import {
  NameFields,
  EmailField,
  CountryField,
  UsernameField,
} from "@components/FormFields";
import { DialogFooter } from "@components/(dialog)/DialogFooter";
import { Badge } from "@components/shadcnui/badge";
import { getReadableSkillLevel } from "@lib/constants/mapping/playerMapping";
import { getReadablePosition } from "@lib/constants/mapping/playerMapping";
import { PlayerWithProfile } from "@lib/constants/types/types";
import { formatDate } from "@lib/dateUtils";

interface PlayerProfileDialogProps {
  playerProfile: PlayerWithProfile;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  urlPrefix?: string;
  onSave?: (playerData: PlayerWithProfile) => void;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
}

export function PlayerProfileDialog({
  playerProfile,
  open,
  onOpenChange,
  urlPrefix = "needasub.com/",
  onSave,
  primaryAction,
  secondaryAction,
}: PlayerProfileDialogProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerData, setPlayerData] =
    useState<PlayerWithProfile>(playerProfile);

  // Format dates for display
  const joinDateFormatted = playerData.created_at
    ? formatDate(playerData.created_at)
    : "N/A";

  // Define stats items with player-specific stats
  const statsItems = [
    { label: "Joined", value: joinDateFormatted },
    {
      label: "Skill Level",
      value: getReadableSkillLevel(playerData.skill_level),
    },
    {
      label: "Position",
      value:
        playerData.primary_position ||
        (playerData.position && playerData.position.length > 0
          ? getReadablePosition(playerData.position)
          : "Not specified"),
    },
    {
      label: "Experience",
      value: playerData.years_experience
        ? `${playerData.years_experience} years`
        : "Not specified",
    },
  ];

  // Default actions
  const defaultActions = (
    <>
      {secondaryAction || (
        <Button
          variant="outline"
          className="h-8 px-3 text-white bg-zinc-900 border-zinc-700 hover:bg-zinc-800"
        >
          Archive
        </Button>
      )}

      {primaryAction || (
        <Button className="h-8 px-3 bg-primary hover:bg-primary/90">
          View applications
        </Button>
      )}
    </>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-md p-0 overflow-hidden text-white bg-black border-none shadow-2xl"
        onInteractOutside={(e) => e.preventDefault()} // Prevents closing when clicking outside
      >
        <UserProfileHeader
          name={playerData.full_name || "Unnamed Player"}
          email={`player${playerData.id.substring(0, 6)}@gmail.com`}
          avatarUrl={playerData.avatar_url}
          onClose={() => onOpenChange(false)}
          actions={defaultActions}
        />

        <StatsGrid items={statsItems} />

        {/* Player-specific information */}
        <div className="px-5 mb-4">
          <h3 className="mb-2 text-sm font-medium">Availability</h3>
          <div className="flex flex-wrap gap-2">
            {playerData.availability && playerData.availability.length > 0 ? (
              playerData.availability.map((time, index) => (
                <Badge key={index} variant="outline" className="bg-zinc-900">
                  {time}
                </Badge>
              ))
            ) : (
              <span className="text-sm text-zinc-400">Not specified</span>
            )}
          </div>
        </div>

        <div className="px-5 pb-5 space-y-5">
          {/* <NameFields
            firstName={playerData.full_name || ""}
            lastName={""}
            readOnly={!isEditing}
            onChange={() => null}
          />

          <EmailField
            email={email}
            readOnly={!isEditing}
            isVerified={playerData.isVerified}
            verificationDate="2 JAN, 2025" // Placeholder date
            onChange={updateEmail}
          />

          <CountryField
            country={playerData.location || "Not specified"}
            readOnly={!isEditing}
            onChange={updateLocation}
          />

          <UsernameField
            username={
              playerData.username || `player${playerData.id.substring(0, 6)}`
            }
            prefix={urlPrefix}
            readOnly={!isEditing}
            onChange={updateUsername}
          /> */}
        </div>

        <DialogFooter
          onCancel={() => {
            setIsEditing(false);
            onOpenChange(false);
          }}
          onSave={() => null}
          disabled={!isEditing}
        >
          {!isEditing && (
            <Button
              variant="outline"
              className="mr-auto text-white bg-zinc-900 border-zinc-700 hover:bg-zinc-800"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
