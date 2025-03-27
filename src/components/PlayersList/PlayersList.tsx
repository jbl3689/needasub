import { Suspense } from "react";
import { getPlayersWithProfiles } from "@actions/users/getPlayerProfiles";
import { PlayerSkeleton } from "@components/skeletons";
import { PlayerCard } from "./PlayerCard";

async function PlayersListContent() {
  const players = await getPlayersWithProfiles();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}

export function PlayersList() {
  return (
    <Suspense fallback={<PlayerSkeleton />}>
      <PlayersListContent />
    </Suspense>
  );
}
