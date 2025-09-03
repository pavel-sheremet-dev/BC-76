import { Metadata } from "next";
import Section from "@/components/Section/Section";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BC-76 | Home Page",
  description: "Home Page Description",
};

export default function HomePage() {
  return (
    <Section>
      <h1>Home Page</h1>
      <p>Welcome to MY APP</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet
        tenetur consectetur illo expedita impedit corrupti quos. Beatae odit vel
        possimus maxime officia culpa dolores laborum, ullam praesentium sit
        sunt?
      </p>
      <Image
        src="https://picsum.photos/536/354"
        alt="image_alt"
        priority
        width={200}
        height={200}
      />
    </Section>
  );
}
