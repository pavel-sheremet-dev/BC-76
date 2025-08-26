import axios from "axios";
import type { NewTask, Task, UpdatedTask } from "@/types/task";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export type OrderValue = "asc" | "desc";

interface GetTasksParams {
  search: string;
  order?: OrderValue;
  page: number;
}

export const getTasks = async ({ search, order, page }: GetTasksParams) => {
  const res = await axios.get<Task[]>("/tasks", {
    params: {
      search,
      sortBy: "createdAt",
      order,
      limit: 4,
      page,
    },
  });
  return res.data;
};

export const getTaskById = async (taskId: string): Promise<Task> => {
  const res = await axios.get<Task>(`/tasks/${taskId}`);
  return res.data;
};

export const createNewTask = async (taskData: NewTask): Promise<Task> => {
  const res = await axios.post<Task>("/tasks", taskData);
  return res.data;
};

export const deleteTask = async (taskId: string): Promise<Task> => {
  const res = await axios.delete<Task>(`/tasks/${taskId}`);
  return res.data;
};

export const updateTask = async ({
  id,
  ...updatedTask
}: UpdatedTask): Promise<Task> => {
  const res = await axios.put<Task>(`/tasks/${id}`, updatedTask);
  return res.data;
};

// {
//     "text": "NEW TASK NAME",
//     "completed": true,
//     "createdAt": 1755338927,
//     "id": "144"
// }

// {
//     "completed": true,
//     "id": "144"
// }

// {
//     "text": "RETURN OLD TASK NAME",
//     "completed": fasle,
//     "id": "144"
// }
