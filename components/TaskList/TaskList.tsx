import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Task, UpdatedTask } from "@/types/task";
import css from "./TaskList.module.css";
import { deleteTask, updateTask } from "@/lib/api";
import Link from "next/link";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: () => {
      console.log("error");
    },
  });

  const updateMutation = useMutation({
    mutationFn: (updatedTask: UpdatedTask) => updateTask(updatedTask),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  const onCheckBoxChange = (task: Task) => {
    updateMutation.mutate({
      id: task.id,
      completed: !task.completed,
    });
  };

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            className={css.checkbox}
            onChange={() => onCheckBoxChange(task)}
          />
          <span className={css.text}>{task.text}</span>

          <button
            type="button"
            className={css.button}
            onClick={() => deleteMutation.mutate(task.id)}
          >
            {deleteMutation.isPending && deleteMutation.variables === task.id
              ? "Deleting"
              : "Delete"}
          </button>
          <Link className={css.button} href={`/tasks/${task.id}`}>
            Details
          </Link>
        </li>
      ))}
    </ul>
  );
}
