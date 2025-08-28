import styles from "./CardLoader.module.css";

const CardLoader = ({ textLabel }: { textLabel?: string }) => {
  return (
    <div className={styles.card}>
      <div className={styles.box}>{textLabel && <div>{textLabel}</div>}</div>
    </div>
  );
};

export default CardLoader;
