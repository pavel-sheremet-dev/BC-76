import { fetchProductById } from "@/lib/products-api";
import BackButton from "./BackButton";

// localhost:3000/products/122
// interceptedProductPage
//

interface Props {
  params: Promise<{ productId: string }>;
}

const ProductPage = async ({ params }: Props) => {
  const { productId } = await params;

  const product = await fetchProductById(Number(productId));

  return (
    <section>
      <div>
        <h3>Product Page {productId}</h3>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <BackButton />
      </div>
    </section>
  );
};

export default ProductPage;
