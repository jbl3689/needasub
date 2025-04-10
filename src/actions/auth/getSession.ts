// src/actions/auth/getSession.ts
"use server";

import { createClient } from "@lib/supabase/server";
import { redirect } from "next/navigation";

/**
 * Gets the current session and optionally redirects based on auth status
 * @param options Configuration options
 * @returns Session data
 */
export async function getSession(options?: {
  redirectIfAuthenticated?: string | null;
  redirectIfUnauthenticated?: string | null;
}) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getSession();
  const { session } = data;

  // Redirect authenticated users if path is provided
  if (session && options?.redirectIfAuthenticated) {
    redirect(options.redirectIfAuthenticated);
  }

  // Redirect unauthenticated users if path is provided
  if (!session && options?.redirectIfUnauthenticated) {
    redirect(options.redirectIfUnauthenticated);
  }

  return { session };
}
