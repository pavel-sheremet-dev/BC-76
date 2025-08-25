import Counter from "@/components/Counter/Counter";
import axios from "axios";

const ProfilePage = async () => {
  console.log("Profile Page");

  const { data } = await axios.get<{ id: number; title: string }[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <section>
      <h1>Profile Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
        repellendus maxime provident est, nemo qui similique incidunt. Cum est
        similique in, reiciendis beatae quisquam, iste officia atque maiores,
        ipsam architecto? Perferendis, repudiandae dignissimos. Exercitationem
        hic, doloremque aperiam officia facere rerum itaque quia eos id quasi
        odio blanditiis saepe enim? Harum.
      </p>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Counter />
    </section>
  );
};

export default ProfilePage;
