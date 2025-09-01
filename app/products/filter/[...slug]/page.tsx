import ProductList from "@/components/ProductList/ProductList";
import { fetchProductsByCategory } from "@/lib/products-api";

import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string[] }>;
}

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
