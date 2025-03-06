"use server";

import { PlayerProfiles, PlayerWithProfile } from "@lib/constants/types/types";
import { createClient } from "@lib/supabase/server";

export async function getAllPlayerProfiles(): Promise<PlayerProfiles[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("player_profiles")
    .select("*")
    .order("years_experience");

  if (error) {
    console.error("Error fetching player profiles:", error);
    return [];
  }

  return data as PlayerProfiles[];
}

export async function getPlayersWithProfiles(): Promise<PlayerWithProfile[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("player_profiles")
    .select(
      `
      *,
      profiles!player_profiles_id_fkey (
        full_name,
        avatar_url,
        bio,
        location,
        username
      )
    `
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching players with their profiles:", error);
    return [];
  }

  // Transform the nested structure into a flattened one
  return data.map((player) => ({
    ...player,
    ...player.profiles,
    profiles: undefined, // Remove the nested profiles object
  })) as PlayerWithProfile[];
}
