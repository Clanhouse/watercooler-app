import styles from './cardIconsContainer.module.css';

import { ReactComponent as SpeechIcon } from '../../assets/speechIcon.svg';

const CardIconsContainer = () => {
  return (
    <div className={styles.cardIconsContainer}>
      <div className={styles.cardIconsContainer__icon}>
        <SpeechIcon /> 12
      </div>
    </div>
  );
};

export default CardIconsContainer;
