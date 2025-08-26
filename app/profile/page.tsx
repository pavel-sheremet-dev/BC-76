import Container from "@/components/Container/Container";
import axios from "axios";

const ProfilePage = async () => {
  console.log("Profile Page");

  const { data } = await axios.get<{ id: number; name: string; email: string }>(
    "https://jsonplaceholder.typicode.com/users/2"
  );

  return (
    <section>
      <Container>
        <h1>Profile Page</h1>
        <p>{data.name}</p>
        <p>{data.email}</p>
      </Container>
    </section>
  );
};

export default ProfilePage;
