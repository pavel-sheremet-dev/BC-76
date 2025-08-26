"use client";

import { getTaskById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

import Container from "@/components/Container/Container";

const TaskClient = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskById(taskId),
    refetchOnMount: false,
  });

  return (
    <section>
      <Container>
        {data && (
          <>
            <h1>Single task page {data.id}</h1>
            <p>{data.id}</p>
            <p>{data.text}</p>
            <p>Complete: {String(data.completed)}</p>
            <button onClick={() => router.push("/tasks")}>Go to tasks</button>
          </>
        )}
      </Container>
    </section>
  );
};

export default TaskClient;
