import Container from "@/components/Container/Container";
import Link from "next/link";
import { getTasks } from "@/lib/api";

const TasksPage = async () => {
  const tasks = await getTasks({ search: "", page: 1 });

  return (
    <section>
      <Container>
        <h1>Tasks Page</h1>
        <ol>
          {tasks.slice(0, 10).map((item) => (
            <li key={item.id}>
              <Link href={`/tasks/${item.id}`}>{item.text}</Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default TasksPage;
