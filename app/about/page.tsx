import Section from "@/components/Section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page Description",
};

const AboutPage = () => {
  return (
    <Section>
      <h1>About Page</h1>
    </Section>
  );
};

export default AboutPage;
