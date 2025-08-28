import Container from "@/components/Container/Container";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section>
      <Container>
        <h1>Not Found Page</h1>
        <Link href="/">Go home</Link>
      </Container>
    </section>
  );
};

export default NotFoundPage;
