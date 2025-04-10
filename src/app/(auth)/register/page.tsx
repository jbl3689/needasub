import { RegisterForm } from "@components/(auth)/RegisterForm";
import { createClient } from "@lib/supabase/server";
import { redirect } from "next/navigation";

export default async function RegisterPage({
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
      <RegisterForm />
    </div>
  );
}
