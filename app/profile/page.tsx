import Section from "@/components/Section/Section";

import axios from "axios";

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
