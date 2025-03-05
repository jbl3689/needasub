import { LoginForm } from "@/src/components/auth/LoginForm";
import { createClient } from "@/src/lib/supabase/server";

import { redirect } from "next/navigation";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { returnUrl?: string };
}) {
  // Check if user is already logged in
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    // User is already logged in, redirect
    redirect(searchParams.returnUrl || "/");
  }

  return (
    <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12">
      <LoginForm />
    </div>
  );
}
