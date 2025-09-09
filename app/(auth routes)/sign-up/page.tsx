"use client";

import { Field, Form, Formik, FormikHelpers } from "formik";

import Section from "@/components/Section/Section";
import { register } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";
import { Credentials } from "@/lib/api/api";
import Link from "next/link";

const initialValues: Credentials = {
  email: "",
  password: "",
};

export default function SignUp() {
  // 1. register
  // 2. оновлення стану аутентифікації
  // 3. редірект

  const setUser = useAuthStore((state) => state.setUser);

  const router = useRouter();

  const onSubmit = async (
    values: Credentials,
    actions: FormikHelpers<Credentials>
  ) => {
    try {
      const user = await register(values);
      setUser(user);
      actions.resetForm();
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <h1>Register page</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form style={{ display: "grid", gap: 12, maxWidth: 300 }}>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" required />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" required />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </Form>
      </Formik>
      <div>Already registered?</div>
      <Link href={"/sign-in"}>Login</Link>
    </Section>
  );
}
