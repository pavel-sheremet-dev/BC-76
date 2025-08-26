import Container from "@/components/Container/Container";
import Counter from "@/components/Counter/Counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "% About Page",
  description: "%  About Page",
};

const AboutPage = () => {
  return (
    <section>
      <Container>
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          quidem qui nihil debitis, ratione sequi quam commodi, asperiores
          minima facere sed voluptate, ducimus culpa reprehenderit inventore
          placeat dolorem consectetur architecto.
        </p>
        <Counter />
      </Container>
    </section>
  );
};

export default AboutPage;
