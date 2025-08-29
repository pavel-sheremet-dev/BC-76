import { fetchProductsByCategory } from "@/lib/products-api";
import Link from "next/link";

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
      <div>
        <h3>Products</h3>
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <Link href={`/products/${item.id}`}>Open Details</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsPageByCategory;
