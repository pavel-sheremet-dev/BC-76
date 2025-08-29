"use client";

import Modal from "@/components/Modal/Modal";
import Section from "@/components/Section/Section";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <Section>
        <h1>Login Page</h1>
      </Section>
    </Modal>
  );
};

export default LoginPage;
