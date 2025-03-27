"use server";

import { createClient } from "@supabase/supabase-js";
import { Team } from "@lib/constants/types/types";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function createTeam(
  team: Omit<Team, "id" | "created_at" | "updated_at">
) {
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
