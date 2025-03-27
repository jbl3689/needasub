"use server";

import { createClient } from "@lib/supabase/server";
import { Team } from "@lib/constants/types/types";

export async function createTeam(
  team: Omit<Team, "id" | "created_at" | "updated_at">
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("teams")
    .insert([team])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
