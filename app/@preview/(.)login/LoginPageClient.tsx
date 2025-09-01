"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import Section from "@/components/Section/Section";

const LoginPageClient = () => {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <Section>
        <h1>Login Page</h1>
      </Section>
    </Modal>
  );
};

export default LoginPageClient;
