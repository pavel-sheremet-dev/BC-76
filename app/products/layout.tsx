import Container from "@/components/Container/Container";

import styles from "./layout.module.css";
import Card from "@/components/Card/Card";

interface Props {
  children: React.ReactNode;
}

const MailServiceLayout = ({ children }: Props) => {
  return (
    <div className={styles.dashboard}>
      <Container className={styles.grid}>
        <aside className={styles.sidebar}>
          <Card>
            <h3>Categories</h3>
          </Card>
        </aside>
        <div className={styles.products}>
          <Card>{children}</Card>
        </div>
      </Container>
    </div>
  );
};

export default MailServiceLayout;
