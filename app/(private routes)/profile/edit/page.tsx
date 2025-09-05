"use client";

import Section from "@/components/Section/Section";
import { updateUser } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { useRouter } from "next/navigation";

export default function EditProfileClient() {
  // 1. оновлення юзеру
  // 2. оновлення стану юзера
  // 3. перенаправлення на сторінку профілю

  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const username = formData.get("username") as string;

    const user = await updateUser({ username });
    setUser(user);
    router.push("/profile");
  };

  return (
    <Section>
      <h1>Edit Profile Page</h1>
      <form
        action={handleSubmit}
        style={{ display: "grid", gap: 12, maxWidth: 300 }}
      >
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            name="username"
            defaultValue={user?.username ?? ""}
          />
        </div>

        <p>Email: user@email.com</p>

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit">Save</button>
          <button type="button" onClick={() => router.back()}>
            Cancel
          </button>
        </div>
      </form>
    </Section>
  );
}
