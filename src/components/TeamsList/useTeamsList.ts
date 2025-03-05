import { getAllTeams } from "@/src/actions/teams/getTeams";
import { Team } from "@/src/lib/constants/types/types";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

interface UseTeamsListProps {
  setTeams: Dispatch<SetStateAction<Team[]>>;
}

export function useTeamsList({ setTeams }: UseTeamsListProps) {
  // State for the teams data
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  // Function to fetch teams
  const fetchTeams = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const allTeams = await getAllTeams();

      setTeams(allTeams);
      setTotalCount(allTeams.length);
    } catch (e) {
      setError(e instanceof Error ? e.message : "An unknown error occurred");
      setTeams([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    fetchTeams,
    isLoading,
    error,
    totalCount,
  };
}
