import { Metadata } from "next";

export const metadata: Metadata = {
  title: "% About Page",
  description: "%  About Page",
};

const AboutPage = () => {
  return (
    <section>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quidem
        qui nihil debitis, ratione sequi quam commodi, asperiores minima facere
        sed voluptate, ducimus culpa reprehenderit inventore placeat dolorem
        consectetur architecto.
      </p>
    </section>
  );
};

export default AboutPage;
