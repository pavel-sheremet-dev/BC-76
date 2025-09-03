"use client";

import { useCounterStore } from "@/lib/store/counterStore";
import Container from "../Container/Container";

import styles from "./Footer.module.css";

const Footer = () => {
  const { bears, incrementBears } = useCounterStore();

  return (
    <footer className={styles.footer}>
      <Container className={styles.box}>
        <div>Bears: {bears}</div>
        <button onClick={incrementBears}>Inceremet Bears</button>
        My App | {new Date().getFullYear()}
      </Container>
    </footer>
  );
};

export default Footer;
