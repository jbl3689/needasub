"use client";

import { useState, useEffect } from "react";
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
import { useTeamsList } from "./useTeamsList";
import { Team } from "@lib/constants/types/types";
import {
  getReadableAgeGroup,
  getReadableGenderCategory,
  getReadableSkillLevel,
} from "@lib/constants/mapping/teamMapping";

/**
 * Renders a responsive grid of team cards and manages team selection.
 *
 * The component fetches team data on mount via a custom hook and displays each team's details
 * within a card. Each card includes the team's name, home location, skill level, age group, gender category,
 * league and division badges, and a brief description. A "View Team" button on each card opens a dialog
 * to show additional team information.
 */
export function TeamsList() {
  const [teams, setTeams] = useState<Team[]>([]);
  const { fetchTeams, isLoading, error, totalCount } = useTeamsList({
    setTeams,
  });

  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleTeamClick = (team: Team) => {
    setSelectedTeam(team);
    setDialogOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.id} className="overflow-hidden">
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
              <Button
                size="sm"
                onClick={() => handleTeamClick(team)}
                effect="ringHover"
              >
                View Team
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedTeam && (
        <TeamDialog
          team={selectedTeam}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      )}
    </>
  );
}
