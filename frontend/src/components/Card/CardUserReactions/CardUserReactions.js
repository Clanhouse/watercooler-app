import styles from './cardUserReactions.module.css';

import { ReactComponent as SpeechIcon } from '../../../assets/speechIcon.svg';
import { ReactComponent as LoveIconOutlined } from '../../../assets/love_icon_outlined.svg';

const CardUserReactions = () => {
  return (
    <div className={styles.cardIconsContainer}>
      <div className={styles.cardIconsContainer__icon}>
        <span className={styles.cardIconsContainer__value}>12</span>
        <LoveIconOutlined
          className={`${styles.icon} ${styles.loveIcon}`}
        />{' '}
      </div>
      <div className={styles.cardIconsContainer__icon}>
        <span className={styles.cardIconsContainer__value}>12</span>{' '}
        <SpeechIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default CardUserReactions;
