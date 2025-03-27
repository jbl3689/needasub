"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@components/shadcnui/dialog";
import { Button } from "@components/shadcnui/button";
import { Badge } from "@components/shadcnui/badge";
import { MapPin, Users } from "lucide-react";
import { Team } from "@lib/constants/types/types";
import {
  getReadableAgeGroup,
  getReadableGenderCategory,
  getReadableSkillLevel,
} from "@lib/constants/mapping/teamMapping";

interface TeamDialogProps {
  team: Team;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TeamDialog({ team, open, onOpenChange }: TeamDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Team Details</DialogTitle>
          <DialogDescription>View details about this team</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{team.name}</h3>
              <p className="text-sm text-muted-foreground">
                {getReadableSkillLevel(team.team_type)}
              </p>
              <div className="flex items-center mt-1">
                <span className="text-sm font-medium">
                  {team.active ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">League</span>
              <Badge>{team.league}</Badge>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Division</span>
              <Badge variant="outline">{team.division}</Badge>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{team.home_location}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Age Group</span>
              <Badge variant="secondary">
                {getReadableAgeGroup(team.age_group)}
              </Badge>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Gender Category</span>
              <Badge variant="secondary">
                {getReadableGenderCategory(team.gender_category)}
              </Badge>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">About the Team</h4>
            <p className="text-sm text-muted-foreground">{team.description}</p>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
            <Button>Contact Team</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
