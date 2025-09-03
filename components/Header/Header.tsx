"use client";

import Link from "next/link";
import Container from "../Container/Container";

import styles from "./Header.module.css";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useCounterStore } from "@/lib/store/counterStore";

const buildLinkClassName = ({
  pathname,
  slug,
  className,
}: {
  pathname: string;
  slug: string;
  className?: string;
}) => {
  return clsx(
    styles.link,
    pathname.startsWith(slug) && styles.active,
    className
  );
};

const navItems: { path: string; root_segment: string; label: string }[] = [
  {
    path: "/about",
    root_segment: "/about",
    label: "About",
  },
  {
    path: "/profile",
    root_segment: "/profile",
    label: "Profile",
  },
  {
    path: "/tasks",
    root_segment: "/tasks",
    label: "Tasks",
  },
  // {
  //   path: "/goods",
  //   root_segment: "/goods",
  //   label: "Goods",
  // },
  // {
  //   path: "/mails",
  //   root_segment: "/mails",
  //   label: "Mails",
  // },
  {
    path: "/products/filter/all",
    root_segment: "/products",
    label: "Products",
  },
];

const Header = () => {
  const pathname = usePathname();
  const counter = useCounterStore((s) => s.counter);

  return (
    <header className={styles.header}>
      <Container className={styles.box}>
        <Link href="/" className={styles.logo}>
          APP LOGO
        </Link>
        <nav>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  className={buildLinkClassName({
                    slug: item.root_segment,
                    pathname,
                  })}
                  href={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>Counter: {counter}</div>
        <Link
          href="/login"
          className={buildLinkClassName({
            slug: "/login",
            pathname,
          })}
        >
          Login
        </Link>
      </Container>
    </header>
  );
};

export default Header;
