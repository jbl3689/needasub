"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/src/actions/auth/signIn";

export function useLogin() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Combine isPending and manual loading state
  const isSubmitting = isLoading || isPending;

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn(formData);

      if (result?.error) {
        setError(result.error);
        setIsLoading(false);
        return;
      }

      if (result?.success) {
        // Use startTransition to handle the navigation state change
        startTransition(() => {
          router.push(result.returnUrl);
          router.refresh(); // Refresh to update auth state in the UI
        });
      }
    } catch (e) {
      setError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    isSubmitting,
    error,
  };
}
