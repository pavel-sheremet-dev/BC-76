import { fetchProductById } from "@/lib/products-api";
import ProductPreviewClient from "./ProductPreview.client";

interface Props {
  params: Promise<{ productId: string }>;
}

const ProductPreviewPage = async ({ params }: Props) => {
  const { productId } = await params;

  const product = await fetchProductById(Number(productId));

  return <ProductPreviewClient product={product} />;
};

export default ProductPreviewPage;
