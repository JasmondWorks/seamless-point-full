"use client";

import Button, { ButtonVariant } from "@/app/_components/Button";

// Show error from frontend
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error);
  return (
    <main className="flex h-screen justify-center items-center flex-col gap-6 mt-8">
      <h1 className="text-center !leading-tight text-3xl !mb-0 font-bold">
        Something went wrong!
      </h1>
      <p className="text-lg">Please try again later.</p>
      <Button onClick={reset} variant={ButtonVariant.fill}>
        Try again!
      </Button>
    </main>
  );
}
