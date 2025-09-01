import css from "./ProductList.module.css";

import Link from "next/link";
import { Product } from "@/types/product";

interface ProductListtProps {
  products: Product[];
}

export default function ProductListt({ products }: ProductListtProps) {
  return (
    <ul className={css.list}>
      {products.map((product) => (
        <li key={product.id} className={css.item}>
          <span className={css.text}>{product.title}</span>
          <Link className={css.button} href={`/products/${product.id}`}>
            Details
          </Link>
        </li>
      ))}
    </ul>
  );
}
