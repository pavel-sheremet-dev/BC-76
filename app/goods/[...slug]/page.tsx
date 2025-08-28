import Container from "@/components/Container/Container";

interface Props {
  params: Promise<{ slug: string[] }>;
}

const GoodsPage = async ({ params }: Props) => {
  const { slug } = await params;

  return (
    <section>
      <Container>
        <h1>Goods Page</h1>
        <p>Category: {slug[0]}</p>
        <p>Subcategory: {slug[1]}</p>
      </Container>
    </section>
  );
};

export default GoodsPage;
