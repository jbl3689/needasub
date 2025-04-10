import { Suspense } from "react";
import { getPlayersWithProfiles } from "@actions/users/getPlayerProfiles";
import { PlayerSkeleton } from "@components/skeletons";
import { PlayerCard } from "./PlayerCard";

/**
 * Renders a responsive grid of player cards and manages the state for displaying a player profile dialog.
 *
 * This component fetches player data using the custom hook `usePlayersList` and stores it in local state.
 * Each player card displays an avatar, basic information (such as full name, age, and location), badges for position,
 * skill level, and availability, and a brief bio. Clicking the "View Profile" button selects a player and opens a dialog
 * showing detailed profile information.
 */

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
