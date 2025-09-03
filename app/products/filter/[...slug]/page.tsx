import ProductList from "@/components/ProductList/ProductList";
import { fetchProductsByCategory } from "@/lib/products-api";

import styles from "./page.module.css";
import { Metadata } from "next";
import { openGraph } from "@/seo/ogImages";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const category = slug[0];

  // const seoData = await getProductsSeoDataByCategory(category);

  return {
    title: `Products | ${category.charAt(0).toUpperCase() + category.slice(1)}`,
    description: "Products Page Description",
    openGraph: {
      ...openGraph,
      title: `Products | ${category.charAt(0).toUpperCase() + category.slice(1)}`,
      description: "Products Page Description",
      url: `https://example.com/products/filter/${category}`,
    },
  };
};

const ProductsPageByCategory = async ({ params }: Props) => {
  const { slug } = await params;

  const category = slug[0];

  const normalizedCategory = category === "all" ? "" : category;

  const products = await fetchProductsByCategory(normalizedCategory);

  return (
    <section>
      <div className={styles.container}>
        <h3>Products Page</h3>
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default ProductsPageByCategory;
