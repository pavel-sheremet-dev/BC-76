"use client";
import Card from "@/components/Card/Card";

// Error boundaries must be Client Components

export default function Error({ error }: { error: Error }) {
  return (
    <Card>
      <h2>{error.message}</h2>
    </Card>
  );
}
