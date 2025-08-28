import Container from "@/components/Container/Container";

interface Props {
  params: Promise<{ slug: string[] }>;
}

const GoodsPage = async ({ params }: Props) => {
  const { slug } = await params;

  const category = slug[0];
  const subcategory = slug[1];

  return (
    <section>
      <Container>
        <h1>Goods Page</h1>
        <p>Category: {category}</p>
        {subcategory && <p>Subcategory: {subcategory}</p>}
      </Container>
    </section>
  );
};

export default GoodsPage;
