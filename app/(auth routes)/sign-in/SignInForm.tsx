"use client";

import { useRouter } from "next/navigation";

import { login } from "@/lib/api/clientApi";
import { Credentials } from "@/lib/api/api";
import { useAuthStore } from "@/lib/store/authStore";

const SignInForm = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const credentials: Credentials = {
      email,
      password,
    };

    try {
      const user = await login(credentials);
      setUser(user);
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
  );
};

export default SignInForm;
