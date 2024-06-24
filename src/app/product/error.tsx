"use client";

import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className=" flex items-center justify-center font-semibold mt-20">
      {" "}
      <Button onClick={reset}>Try again</Button>
      <div className=" ml-4"> {error.message} </div>
    </div>
  );
}
