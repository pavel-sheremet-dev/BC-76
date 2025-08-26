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

// Динамічний маршрут
// app/tasks/[name_of_dynamic_route]

// Отримання інформаці про динамічний маршрут
// Компонент сторінки
// Пропс params: Promise<{ name_of_dynamic_route: string }> Проміс, який резолвить об'єкт з властивістю, назва якого відповідає назві папки (без квадратних дужок).

// Клієнтський компонент
// client component: hook useParams from "next/navigation"

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
