import { getTaskById } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TaskClient from "./TaskClient";

type TaskPageProps = {
  params: Promise<{ taskId: string }>;
};

const TaskPage = async ({ params }: TaskPageProps) => {
  const { taskId } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTaskById(taskId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TaskClient />
    </HydrationBoundary>
  );
};

export default TaskPage;
