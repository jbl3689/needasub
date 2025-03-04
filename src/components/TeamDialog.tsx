"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/shadcnui/dialog";
import { Button } from "@/src/components/shadcnui/button";
import { Badge } from "@/src/components/shadcnui/badge";
import { Calendar, MapPin, Star, Users } from "lucide-react";

interface TeamDialogProps {
  team: {
    id: number;
    name: string;
    location: string;
    level: string;
    matchType: string;
    positionsNeeded: string[];
    matchDate: string;
    description: string;
    image: string;
    rating: number;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TeamDialog({ team, open, onOpenChange }: TeamDialogProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Team Details</DialogTitle>
          <DialogDescription>
            Apply to join this team for their upcoming match
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{team.name}</h3>
              <p className="text-sm text-muted-foreground">{team.matchType}</p>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                <span className="text-sm font-medium">{team.rating}/5</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Level</span>
              <Badge>{team.level}</Badge>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Match Type</span>
              <Badge variant="outline">{team.matchType}</Badge>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{team.location}</span>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{formatDate(team.matchDate)}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">Positions Needed</h4>
            <div className="flex flex-wrap gap-2">
              {team.positionsNeeded.map((position) => (
                <Badge key={position} variant="secondary">
                  {position}
                </Badge>
              ))}
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
            <Button>Apply to Join</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
