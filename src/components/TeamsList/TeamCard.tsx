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
import { Users } from "lucide-react";
import { TeamDialog } from "../TeamDialog";
import { Team } from "@lib/constants/types/types";
import {
  getReadableAgeGroup,
  getReadableGenderCategory,
  getReadableSkillLevel,
} from "@lib/constants/mapping/teamMapping";

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{team.name}</CardTitle>
            <Users className="w-5 h-5 text-muted-foreground" />
          </div>
          <CardDescription>
            {team.home_location} • {getReadableSkillLevel(team.team_type)} •{" "}
            {getReadableAgeGroup(team.age_group)} •{" "}
            {getReadableGenderCategory(team.gender_category)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>{team.league}</Badge>
            <Badge>{team.division}</Badge>
          </div>
          <div className="mb-2">
            <p className="text-sm font-medium">Team description:</p>
            <div className="flex flex-wrap gap-1 mt-1 text-muted-foreground">
              {team.description}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center">
            <span className="text-sm font-medium">
              {team.active ? "Active" : "Inactive"}
            </span>
          </div>
          <Button size="sm" onClick={() => setDialogOpen(true)}>
            View Team
          </Button>
        </CardFooter>
      </Card>
      <TeamDialog team={team} open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
