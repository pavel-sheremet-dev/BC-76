"use client";

import Section from "@/components/Section/Section";

export default function SignIn() {
  // 1. login
  // 2. оновлення стану аутентифікації
  // 3. редірект (profile)

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const userData = {
      email,
      password,
    };

    console.log("userData", userData);
  };

  return (
    <Section>
      <h1>Login Page</h1>
      <form
        action={handleSubmit}
        style={{ display: "grid", gap: 12, maxWidth: 300 }}
      >
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </Section>
  );
}
