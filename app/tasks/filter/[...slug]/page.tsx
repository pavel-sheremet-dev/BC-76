import { getTasks } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TasksClient from "./TasksClient";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export default async function TasksPage({ params }: Props) {
  const { slug } = await params;
  const tag = slug[0];

  console.log(tag);
  const queryClient = new QueryClient();
  const search = "";
  const page = 1;

  await queryClient.prefetchQuery({
    queryKey: ["tasks", search, page],
    queryFn: () => getTasks({ search, page }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TasksClient />
    </HydrationBoundary>
  );
}
