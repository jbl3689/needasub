import { Suspense } from "react";
import { getAllTeams } from "@actions/teams/getTeams";
import { TeamSkeleton } from "@components/skeletons";
import { TeamCard } from "./TeamCard";

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
