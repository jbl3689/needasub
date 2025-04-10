"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useRegister } from "./useRegister";

import { Input } from "../../shadcnui/input";
import { Button } from "../../shadcnui/button";
import { Alert, AlertDescription } from "../../shadcnui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shadcnui/select";

export function RegisterForm() {
  const { handleSubmit, isSubmitting, error, successMessage } = useRegister();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "";

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="text-gray-500">
          Enter your details to create your NeedASub account
        </p>
      </div>

      <form action={handleSubmit} className="space-y-4">
        {/* Hidden field for return URL */}
        <input type="hidden" name="returnUrl" value={returnUrl} />

        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium">
            Full Name
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            required
            autoComplete="name"
          />
        </div>

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
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="new-password"
          />
          <p className="text-xs text-muted-foreground">
            Must be at least 6 characters long
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="accountType" className="text-sm font-medium">
            I am a:
          </label>
          <Select name="accountType" required defaultValue="">
            <SelectTrigger id="accountType">
              <SelectValue placeholder="Select account type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="player">Player looking for a team</SelectItem>
              <SelectItem value="team_manager">
                Team looking for players
              </SelectItem>
              <SelectItem value="both">Both player and team manager</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {successMessage && (
          <Alert>
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Create Account"}
        </Button>
      </form>

      <div className="text-sm text-center">
        Already have an account?{" "}
        <Link
          href={{
            pathname: "/login",
            search: returnUrl ? `?returnUrl=${returnUrl}` : "",
          }}
          className="text-primary hover:underline"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
