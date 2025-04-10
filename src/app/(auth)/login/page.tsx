import { getSession } from "@actions/auth/getSession";
import { LoginForm } from "@components/(auth)/LoginForm";
import { createClient } from "@lib/supabase/server";

import { redirect } from "next/navigation";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { returnUrl?: string };
}) {
  await getSession({
    redirectIfAuthenticated: searchParams.returnUrl || "/",
  });

  return (
    <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12">
      <LoginForm />
    </div>
  );
}
