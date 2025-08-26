"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./TaskForm.module.css";
import type { NewTask } from "@/types/task";
import { createNewTask } from "@/lib/api";

interface TaskFormProps {
  onClose: () => void;
}

export default function TaskForm({ onClose }: TaskFormProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTask: NewTask) => createNewTask(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      onClose();
    },
  });

  const handleSubmit = (formData: FormData) => {
    const newTask: NewTask = {
      text: formData.get("text") as string,
    };

    mutation.mutate(newTask);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5}></textarea>
      </label>

      <button type="submit" className={css.button}>
        {mutation.isPending ? "Creating new task" : "Create"}
      </button>
    </form>
  );
}
