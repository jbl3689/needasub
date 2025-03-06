"use server";

import { Profiles } from "@lib/constants/types/types";
import { createClient } from "@lib/supabase/server";

export async function getAllProfiles(): Promise<Profiles[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("full_name");

  if (error) {
    console.error("Error fetching profiles:", error);
    return [];
  }

  return data as Profiles[];
}
