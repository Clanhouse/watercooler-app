import PropTypes from 'prop-types';
import styles from './cardUserReactions.module.css';

import { ReactComponent as SpeechIcon } from '../../../assets/speechIcon.svg';
import { ReactComponent as LoveIconOutlined } from '../../../assets/love_icon_outlined.svg';
import { ReactComponent as LoveIconFullfiled } from '../../../assets/love_icon_fullfiled.svg';

const CardUserReactions = ({ isLiked, handleLikePost }) => {
  return (
    <div className={styles.cardIconsContainer}>
      <div className={styles.cardIconsContainer__icon}>
        <span className={styles.cardIconsContainer__value}>12</span>
        {isLiked ? (
          <LoveIconFullfiled
            className={`${styles.icon} ${styles.loveIcon}`}
            onClick={handleLikePost}
          />
        ) : (
          <LoveIconOutlined
            className={`${styles.icon} ${styles.loveIcon}`}
            onClick={handleLikePost}
          />
        )}{' '}
      </div>
      <div className={styles.cardIconsContainer__icon}>
        <span className={styles.cardIconsContainer__value}>12</span>{' '}
        <SpeechIcon className={styles.icon} />
      </div>
    </div>
  );
};

CardUserReactions.propTypes = {
  isLiked: PropTypes.bool,
  handleLikePost: PropTypes.func,
};

CardUserReactions.defaultProps = {
  isLiked: false,
  handleLikePost: () => {
    console.log('click');
  },
};
export default CardUserReactions;
