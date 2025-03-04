"use server";

import { createClient } from "@/src/lib/supabase/server";

export async function signIn(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Validation
  if (!email || !password) {
    return {
      error: "Email and password are required",
    };
  }

  // Attempt sign in
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  // Get return URL or default to dashboard
  const returnUrl = (formData.get("returnUrl") as string) || "/dashboard";

  // Redirect is handled by the component using this action
  return {
    success: true,
    returnUrl,
  };
}
