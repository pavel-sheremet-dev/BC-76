import Section from "@/components/Section/Section";

import { Metadata } from "next";
import SignInForm from "./SignInForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in page",
};

export default function SignIn() {
  // 1. login
  // 2. оновлення стану аутентифікації
  // 3. редірект (profile)

  return (
    <Section>
      <Link href="/">LOGO</Link>
      <h1>Login Page</h1>
      <SignInForm />
      <div>Not registered?</div>
      <Link href={"/sign-up"}>Register</Link>
    </Section>
  );
}
