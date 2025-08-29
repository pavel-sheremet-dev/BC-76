import Container from "@/components/Container/Container";

import styles from "./layout.module.css";
import Card from "@/components/Card/Card";

interface Props {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const MailServiceLayout = async ({ children, sidebar }: Props) => {
  return (
    <div className={styles.dashboard}>
      <Container className={styles.grid}>
        <aside className={styles.sidebar}>
          <Card>{sidebar}</Card>
        </aside>
        <div className={styles.products}>
          <Card>{children}</Card>
        </div>
      </Container>
    </div>
  );
};

export default MailServiceLayout;
