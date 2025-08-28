import { redirect } from "next/navigation";

const TasksPage = () => {
  redirect("/tasks/filter/all");
  return null;
};

export default TasksPage;
