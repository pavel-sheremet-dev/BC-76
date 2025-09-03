import Section from "@/components/Section/Section";

import axios from "axios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Page",
  description: "Profile Page Description",
};

const ProfilePage = async () => {
  const { data } = await axios.get<{ id: number; name: string; email: string }>(
    "https://jsonplaceholder.typicode.com/users/2"
  );

  return (
    <Section>
      <h1>Profile Page</h1>
      <p>{data.name}</p>
      <p>{data.email}</p>
    </Section>
  );
};

export default ProfilePage;
