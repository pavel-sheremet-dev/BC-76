import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page",
};

const AboutPage = () => {
  redirect("/");
  return null;
};

export default AboutPage;
