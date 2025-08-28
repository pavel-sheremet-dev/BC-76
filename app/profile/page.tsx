import Container from "@/components/Container/Container";
import axios from "axios";
import Link from "next/link";

const ProfilePage = async () => {
  console.log("Profile Page");

  await new Promise((res, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        res("Success");
      } else {
        reject("OOOOPS");
      }
    }, 5000);
  });
  const { data } = await axios.get<{ id: number; name: string; email: string }>(
    "https://jsonplaceholder.typicode.com/users/2"
  );

  return (
    <section>
      <Container>
        <h1>Profile Page</h1>
        <p>{data.name}</p>
        <p>{data.email}</p>
        <Link href="/profile/edit">Edit</Link>
      </Container>
    </section>
  );
};

export default ProfilePage;
