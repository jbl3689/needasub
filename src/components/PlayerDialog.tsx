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
import { PlayerWithProfile } from "@lib/constants/types/types";
import { getReadableSkillLevel } from "@lib/constants/mapping/playerMapping";
import { PlayerProfileDialog } from "./(dialog)/PlayerProfileDialog";

interface PlayerDialogProps {
  player: PlayerWithProfile;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PlayerDialog({
  player,
  open,
  onOpenChange,
}: PlayerDialogProps) {
  return (
    <PlayerProfileDialog
      playerProfile={player}
      open={open}
      onOpenChange={onOpenChange}
    />
    // <Dialog open={open} onOpenChange={onOpenChange}>
    //   <DialogContent className="w-1/2">
    //     <DialogHeader>
    //       <DialogTitle>Player Profile</DialogTitle>
    //       <DialogDescription>
    //         Contact this player to arrange a match
    //       </DialogDescription>
    //     </DialogHeader>
    //     <div className="flex flex-col gap-4">
    //       <div className="flex items-center gap-4">
    //         <Avatar className="w-12 h-12">
    //           <AvatarImage
    //             src={player.avatar_url ?? ""}
    //             alt={player.full_name ?? ""}
    //           />
    //           <AvatarFallback>
    //             {player.full_name?.substring(0, 2)}
    //           </AvatarFallback>
    //         </Avatar>
    //         <div>
    //           <h3 className="text-lg font-semibold">{player.full_name}</h3>
    //           <p className="text-sm text-muted-foreground">
    //             {player.age} years old • {player.location}
    //           </p>
    //           <div className="flex items-center mt-1">
    //             <Star className="w-4 h-4 mr-1 fill-primary text-primary" />
    //             <span className="text-sm font-medium">
    //               {player.years_experience} years experience
    //             </span>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="grid grid-cols-2 gap-2">
    //         <div className="flex flex-col gap-1">
    //           <span className="text-sm font-medium">Position</span>
    //           <Badge>{player.position}</Badge>
    //         </div>
    //         <div className="flex flex-col gap-1">
    //           <span className="text-sm font-medium">Level</span>
    //           <Badge variant="outline">
    //             {getReadableSkillLevel(player.skill_level)}
    //           </Badge>
    //         </div>
    //         <div className="flex items-center gap-1 mt-2">
    //           <MapPin className="w-4 h-4 text-muted-foreground" />
    //           <span className="text-sm">{player.location}</span>
    //         </div>
    //         <div className="flex items-center gap-1 mt-2">
    //           <Calendar className="w-4 h-4 text-muted-foreground" />
    //           <span className="text-sm">{player.availability}</span>
    //         </div>
    //       </div>

    //       <div>
    //         <h4 className="mb-1 text-sm font-medium">About</h4>
    //         <p className="text-sm text-muted-foreground">{player.bio}</p>
    //       </div>

    //       <div className="flex justify-end gap-2 mt-4">
    //         <Button variant="outline" onClick={() => onOpenChange(false)}>
    //           Close
    //         </Button>
    //         <Button>Contact Player</Button>
    //       </div>
    //     </div>
    //   </DialogContent>
    // </Dialog>
  );
}
