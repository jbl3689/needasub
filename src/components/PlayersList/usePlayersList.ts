import { getPlayersWithProfiles } from "@actions/users/getPlayerProfiles";
import {
  PlayerProfiles,
  PlayerWithProfile,
  Team,
} from "@lib/constants/types/types";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

interface UsePlayersListProps {
  setPlayers: Dispatch<SetStateAction<PlayerWithProfile[]>>;
}

export function usePlayersList({ setPlayers }: UsePlayersListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  const fetchPlayers = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const allPlayerProfiles = await getPlayersWithProfiles();
      console.log("whats going on");

      setPlayers(allPlayerProfiles);
      setTotalCount(allPlayerProfiles.length);
    } catch (e) {
      setError(e instanceof Error ? e.message : "An unknown error occurred");
      setPlayers([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlayers();
  }, []);

  return {
    isLoading,
    error,
    totalCount,
  };
}
