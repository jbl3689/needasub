"use server";

import { createClient } from "@lib/supabase/server";
import { Team } from "@lib/constants/types/types";

/**
 * Fetches all teams from the database
 * @returns Promise containing an array of teams or empty array if error occurs
 */
export async function getAllTeams(): Promise<Team[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching teams:", error);
    return [];
  }

  return data as Team[];
}

/**
 * Fetches a specific team by ID
 * @param teamId The unique identifier of the team
 * @returns Promise containing the team object or null if not found
 */
export async function getTeamById(teamId: string): Promise<Team | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .eq("id", teamId)
    .single();

  if (error) {
    console.error(`Error fetching team with ID ${teamId}:`, error);
    return null;
  }

  return data as Team;
}

/**
 * Fetches all teams managed by a specific user
 * @param managerId The user ID of the team manager
 * @returns Promise containing an array of teams or empty array if error occurs
 */
export async function getTeamsByManager(managerId: string): Promise<Team[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .eq("manager_id", managerId)
    .order("name");

  if (error) {
    console.error(`Error fetching teams for manager ${managerId}:`, error);
    return [];
  }

  return data as Team[];
}

/**
 * Fetches teams with optional filtering parameters
 * @param params Object containing filter parameters
 * @returns Promise containing filtered teams array
 */
export async function getFilteredTeams({
  location,
  teamType,
  active = true,
  ageGroup,
  limit = 50,
  offset = 0,
}: {
  location?: string;
  teamType?: string;
  active?: boolean;
  ageGroup?: string;
  limit?: number;
  offset?: number;
}): Promise<{
  teams: Team[];
  count: number;
}> {
  const supabase = await createClient();

  // Start building the query
  let query = supabase.from("teams").select("*", { count: "exact" });

  // Apply filters if they exist
  if (location) {
    query = query.ilike("home_location", `%${location}%`);
  }

  if (teamType) {
    query = query.eq("team_type", teamType);
  }

  if (active !== undefined) {
    query = query.eq("active", active);
  }

  if (ageGroup) {
    query = query.eq("age_group", ageGroup);
  }

  // Apply pagination
  query = query.range(offset, offset + limit - 1).order("name");

  // Execute the query
  const { data, error, count } = await query;

  if (error) {
    console.error("Error fetching filtered teams:", error);
    return { teams: [], count: 0 };
  }

  return {
    teams: data as Team[],
    count: count || 0,
  };
}

/**
 * Search for teams by name
 * @param searchTerm The string to search for in team names
 * @returns Promise containing matching teams array
 */
export async function searchTeamsByName(searchTerm: string): Promise<Team[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .ilike("name", `%${searchTerm}%`)
    .order("name");

  if (error) {
    console.error(`Error searching teams with term "${searchTerm}":`, error);
    return [];
  }

  return data as Team[];
}

/**
 * Fetches teams along with their manager profile information
 * @param limit Maximum number of teams to fetch
 * @returns Promise containing teams with manager details
 */
export async function getTeamsWithManagerDetails(limit = 20): Promise<any[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("teams")
    .select(
      `
      *,
      profiles:manager_id (
        id,
        full_name,
        avatar_url,
        username
      )
    `
    )
    .limit(limit)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching teams with manager details:", error);
    return [];
  }

  return data;
}

/**
 * Gets a count of active teams by team type
 * @returns Promise containing count data
 */
export async function getTeamTypeStatistics(): Promise<{
  [key: string]: number;
}> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("teams")
    .select("team_type")
    .eq("active", true);

  if (error) {
    console.error("Error fetching team type statistics:", error);
    return {};
  }

  // Count occurrences of each team type
  const stats: { [key: string]: number } = {};
  data.forEach((team) => {
    const teamType = team.team_type || "unspecified";
    stats[teamType] = (stats[teamType] || 0) + 1;
  });

  return stats;
}

/**
 * Fetches recently created teams
 * @param days Number of days to look back
 * @param limit Maximum number of teams to return
 * @returns Promise containing recent teams array
 */
export async function getRecentlyCreatedTeams(
  days = 30,
  limit = 5
): Promise<Team[]> {
  const supabase = await createClient();

  // Calculate date from X days ago
  const date = new Date();
  date.setDate(date.getDate() - days);
  const fromDate = date.toISOString();

  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .gte("created_at", fromDate)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error(
      `Error fetching teams created in the last ${days} days:`,
      error
    );
    return [];
  }

  return data as Team[];
}
