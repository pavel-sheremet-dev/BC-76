"use client";

import { getTaskById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { notFound, useParams, useRouter } from "next/navigation";

import { useEffect } from "react";
import Section from "@/components/Section/Section";

const TaskClient = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskById(taskId),
    refetchOnMount: false,
  });

  useEffect(() => {
    if (!isLoading && !data) {
      notFound();
    }
  }, [data, isLoading]);

  return (
    <Section>
      {isLoading && <div>loading...</div>}
      {data && (
        <>
          <h1>Single task page {data.id}</h1>
          <p>{data.id}</p>
          <p>{data.text}</p>
          <p>Complete: {String(data.completed)}</p>
          <button onClick={() => router.back()}>Go back</button>
        </>
      )}
    </Section>
  );
};

export default TaskClient;
