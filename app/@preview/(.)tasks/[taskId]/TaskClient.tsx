"use client";

import { getTaskById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { notFound, useParams, useRouter } from "next/navigation";

import { useEffect } from "react";
import Section from "@/components/Section/Section";
import Modal from "@/components/Modal/Modal";

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

  const handleBack = () => router.back();

  return (
    <Modal onClose={handleBack}>
      <Section>
        {isLoading && <div>loading...</div>}
        {data && (
          <>
            <h1>Single task page {data.id}</h1>
            <p>{data.id}</p>
            <p>{data.text}</p>
            <p>Complete: {String(data.completed)}</p>
            <button onClick={handleBack}>Go back</button>
          </>
        )}
      </Section>
    </Modal>
  );
};

export default TaskClient;
