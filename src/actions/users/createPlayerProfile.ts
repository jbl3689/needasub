"use server";

import { createClient } from "@supabase/supabase-js";
import { PlayerProfiles, Profiles } from "@lib/constants/types/types";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface CreatePlayerProfileData {
  id: string;
  full_name: string;
  bio: string;
  location: string;
  age: string;
  position: string[];
  skill_level: string;
  years_experience: string;
  availability: string[];
}

export async function createPlayerProfile(data: CreatePlayerProfileData) {
  // First create the profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .insert([
      {
        id: data.id,
        full_name: data.full_name,
        bio: data.bio,
        location: data.location,
        account_type: "player",
      },
    ])
    .select()
    .single();

  if (profileError) {
    throw profileError;
  }

  // Then create the player profile
  const { data: playerProfile, error: playerProfileError } = await supabase
    .from("player_profiles")
    .insert([
      {
        id: data.id,
        age: parseInt(data.age),
        position: data.position,
        skill_level: data.skill_level,
        years_experience: parseInt(data.years_experience),
        availability: data.availability,
        looking_for_team: true,
      },
    ])
    .select()
    .single();

  if (playerProfileError) {
    // If player profile creation fails, we should clean up the profile
    await supabase.from("profiles").delete().eq("id", data.id);
    throw playerProfileError;
  }

  return {
    ...profile,
    ...playerProfile,
  };
}
