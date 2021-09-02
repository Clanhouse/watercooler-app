import styles from './cardContent.module.css';

const CardContent = () => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.cardContent__userInfo}>
        <h1 className={styles.cardContent__userName}>
          Aneta Maszczak
        </h1>
        <h2 className={styles.cardContent__userPosition}>
          IT director - 5 mins ago
        </h2>
      </div>
      <div className={styles.cardContent__text}>
        How the hell am I supposed to work ???
      </div>
    </div>
  );
};

export default CardContent;
