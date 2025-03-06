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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@components/shadcnui/avatar";
import { Calendar, MapPin, Star } from "lucide-react";

interface PlayerDialogProps {
  player: {
    id: number;
    name: string;
    age: number;
    position: string;
    level: string;
    location: string;
    availability: string;
    bio: string;
    image: string;
    rating: number;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PlayerDialog({
  player,
  open,
  onOpenChange,
}: PlayerDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Player Profile</DialogTitle>
          <DialogDescription>
            Contact this player to arrange a match
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={player.image} alt={player.name} />
              <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{player.name}</h3>
              <p className="text-sm text-muted-foreground">
                {player.age} years old
              </p>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                <span className="text-sm font-medium">{player.rating}/5</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Position</span>
              <Badge>{player.position}</Badge>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Level</span>
              <Badge variant="outline">{player.level}</Badge>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{player.location}</span>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{player.availability}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">About</h4>
            <p className="text-sm text-muted-foreground">{player.bio}</p>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
            <Button>Contact Player</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
