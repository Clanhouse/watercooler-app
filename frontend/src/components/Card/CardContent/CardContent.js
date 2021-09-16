import PropTypes from 'prop-types';
import styles from './cardContent.module.css';

const CardContent = ({ userName, userPosition, content }) => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.cardContent__userInfo}>
        <h1 className={styles.cardContent__userName}>{userName}</h1>
        <h2 className={styles.cardContent__userPosition}>
          {`${userPosition} - 5 mins ago`}
        </h2>
      </div>
      <div className={styles.cardContent__text}>{content}</div>
    </div>
  );
};

CardContent.propTypes = {
  userName: PropTypes.string.isRequired,
  userPosition: PropTypes.string.isRequired,
  content: PropTypes.string,
};

CardContent.defaultProps = {
  content: null,
};

export default CardContent;
