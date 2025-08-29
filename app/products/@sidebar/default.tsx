import Link from "next/link";
import { fetchCategories } from "@/lib/products-api";

// localhost:3000/products/filter/[category]/page.js

const CategorySidebar = async () => {
  const categories = await fetchCategories();
  return (
    <>
      <h3>Categories</h3>{" "}
      <nav>
        <ul>
          <li>
            <Link href={`/products/filter/all`}>All Products</Link>
          </li>
          {categories.map((item) => (
            <li key={item.slug}>
              <Link href={`/products/filter/${item.slug}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default CategorySidebar;
