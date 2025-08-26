import axios from "axios";

import Container from "@/components/Container/Container";

const TasksPage = async () => {
  const { data } = await axios.get<{ id: number; title: string }[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <section>
      <Container>
        <h1>Tasks Page</h1>
        <ol>
          {data.slice(0, 10).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default TasksPage;
