import { Suspense } from "react";
import { getAllTeams } from "@actions/teams/getTeams";
import { TeamSkeleton } from "@components/skeletons";
import { TeamCard } from "./TeamCard";

/**
 * Renders a responsive grid of team cards and manages team selection.
 *
 * The component fetches team data on mount via a custom hook and displays each team's details
 * within a card. Each card includes the team's name, home location, skill level, age group, gender category,
 * league and division badges, and a brief description. A "View Team" button on each card opens a dialog
 * to show additional team information.
 */

async function TeamsListContent() {
  const teams = await getAllTeams();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}

export function TeamsList() {
  return (
    <Suspense fallback={<TeamSkeleton />}>
      <TeamsListContent />
    </Suspense>
  );
}
