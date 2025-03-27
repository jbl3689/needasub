"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/shadcnui/card";
import { Badge } from "@components/shadcnui/badge";
import { Button } from "@components/shadcnui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@components/shadcnui/avatar";
import { PlayerDialog } from "@components/PlayerDialog";
import { PlayerWithProfile } from "@lib/constants/types/types";
import {
  getReadableAvailability,
  getReadablePosition,
  getReadableSkillLevel,
} from "@lib/constants/mapping/playerMapping";

interface PlayerCardProps {
  player: PlayerWithProfile;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card key={player.id} className="overflow-hidden">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage
              src={player.avatar_url ?? ""}
              alt={player.full_name ?? ""}
            />
            <AvatarFallback>{player.full_name?.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{player.full_name}</CardTitle>
            <CardDescription>
              {player.age} years old • {player.location}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge>{getReadablePosition(player.position)}</Badge>
            <Badge variant="outline">
              {getReadableSkillLevel(player.skill_level)}
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">
              Available: {getReadableAvailability(player.availability)}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {player.bio}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center">
            <span className="text-sm font-medium">
              {player.years_experience} years experience
            </span>
          </div>
          <Button size="sm" onClick={() => setDialogOpen(true)}>
            View Profile
          </Button>
        </CardFooter>
      </Card>
      <PlayerDialog
        player={player}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
