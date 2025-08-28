import Container from "@/components/Container/Container";

import styles from "./mails.module.css";
import Card from "@/components/Card/Card";

interface Props {
  children: React.ReactNode;
}

const MailServiceLayout = ({ children }: Props) => {
  return (
    <div className={styles.dashboard}>
      {children}

      <Container className={styles.grid}>
        <aside className={styles.folders}>
          <Card>Folders</Card>
        </aside>
        <div className={styles.emails}>
          <Card>Emails</Card>
        </div>
      </Container>
    </div>
  );
};

export default MailServiceLayout;
