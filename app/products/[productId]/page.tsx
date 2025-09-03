import { fetchProductById } from "@/lib/products-api";
import BackButton from "./BackButton";
import { Metadata } from "next";

import ogImageUrl from "@/public/example.jpg";

interface Props {
  params: Promise<{ productId: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;

  const product = await fetchProductById(Number(productId));

  return {
    title: product.title,
    description: product.description.slice(0, 30) + "...",
    openGraph: {
      title: `Product: ${product.title}`,
      description: product.description.slice(0, 30) + "...",
      url: `https://example.com/products/${productId}`,
      images: [
        {
          url: new URL("https://ac.goit.global/fullstack/react/og-meta.jpg"),
          width: 1200,
          height: 630,
          alt: "My Super App",
        },
      ],
    },
  };
};

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
