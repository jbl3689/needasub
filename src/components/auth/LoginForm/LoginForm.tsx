"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useLogin } from "./useLogin";

import { Input } from "../../shadcnui/input";
import { Button } from "../../shadcnui/button";
import { Alert, AlertDescription } from "../../shadcnui/alert";

export function LoginForm() {
  const { handleSubmit, isSubmitting, error } = useLogin();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "";

  return (
    <div className="max-w-sm mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500">
          Enter your credentials to access your account
        </p>
      </div>

      <form action={handleSubmit} className="space-y-4">
        {/* Hidden field for return URL */}
        <input type="hidden" name="returnUrl" value={returnUrl} />

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            autoComplete="email"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Link
              href="/reset-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
          />
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <div className="text-sm text-center">
        Don't have an account?{" "}
        <Link href="/register" className="text-primary hover:underline">
          Create an account
        </Link>
      </div>
    </div>
  );
}
