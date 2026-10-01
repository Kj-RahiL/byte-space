"use client";

import { useEffect } from "react";
import { StatusScreen } from "@/components/layout/StatusScreen";
import { Button } from "@/components/ui";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// Same layout as the Figma 404 page, for runtime errors
const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col">
      <StatusScreen
        code="Oops"
        codeClassName="text-[120px]/none sm:text-[220px]/none lg:text-[380px]/none lg:-mb-23.75"
        title="Something went wrong on our end"
        description={
          error.digest
            ? `Please try again, or go back to the homepage. (Error reference: ${error.digest})`
            : "Please try again, or go back to the homepage to start over."
        }
        actions={
          <>
            <Button onClick={() => reset()}>Try again</Button>
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
          </>
        }
      />
    </main>
  );
};

export default Error;
