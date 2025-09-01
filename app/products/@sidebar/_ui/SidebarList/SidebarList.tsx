"use client";

import Link from "next/link";

import { ProductCategory } from "@/types/product";

import styles from "./SidebarList.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const buildLinkClassName = ({
  pathname,
  category,
  className,
}: {
  pathname: string;
  category: string;
  className?: string;
}) =>
  clsx(styles.link, pathname.includes(category) && styles.active, className);

interface SidebarListProps {
  categories: ProductCategory[];
}

const SidebarList = ({ categories }: SidebarListProps) => {
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
      <li>
        <Link
          href={`/products/filter/all`}
          className={buildLinkClassName({ pathname, category: "/all" })}
        >
          All Products
        </Link>
      </li>
      {categories.map((item) => (
        <li key={item.slug}>
          <Link
            href={`/products/filter/${item.slug}`}
            className={buildLinkClassName({
              pathname,
              category: `/${item.slug}`,
            })}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarList;
