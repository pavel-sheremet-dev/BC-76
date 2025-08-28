import Section from "@/components/Section/Section";
import Link from "next/link";

const NotFound = () => {
  return (
    <Section>
      <h1>Task Not Found. Try again later.</h1>
      <Link href="/tasks">Go to all tasks</Link>
    </Section>
  );
};

export default NotFound;
