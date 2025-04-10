"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@actions/auth/signup";

export function useRegister() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Combine isPending and manual loading state
  const isSubmitting = isLoading || isPending;

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const result = await signup(formData);

      if (result?.error) {
        setError(result.error);
        setIsLoading(false);
        return;
      }

      if (result?.success) {
        setSuccessMessage(result.message);

        // Use startTransition to handle the navigation state change
        // Optional: you might want to delay redirect to allow user to see success message
        setTimeout(() => {
          startTransition(() => {
            router.push(result.returnUrl);
            router.refresh(); // Refresh to update auth state in the UI
          });
        }, 3000);
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
    successMessage,
  };
}
