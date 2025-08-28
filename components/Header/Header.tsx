"use client";

import Link from "next/link";
import Container from "../Container/Container";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.box}>
        <Link href="/" className={styles.logo}>
          APP LOGO
        </Link>
        <nav>
          <ul className={styles.list}>
            {/* Redirect example */}
            {/* <li>
              <Link href="/about">About</Link>
            </li> */}
            {/* <li>
              <Link href="/profile">Profile</Link>
            </li> */}
            <li>
              <Link href="/tasks">Tasks</Link>
            </li>
            {/* <li>
              <Link href="/goods">Goods</Link>
            </li> */}
            <li>
              <Link href="/mails">Mails</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
