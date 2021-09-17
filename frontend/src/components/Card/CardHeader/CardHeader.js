import PropTypes from 'prop-types';
import styles from './cardHeader.module.css';
import Avatar from '../../Avatar/Avatar';
import CardUserReactions from '../CardUserReactions/CardUserReactions';

const CardHeader = ({
  author,
  authorPosition,
  isLiked,
  handleLikePost,
}) => {
  return (
    <div className={styles.cardHeader}>
      <Avatar size="large" />
      <div className={styles.cardHeader__userInfo}>
        <h1 className={styles.cardHeader__userName}>{author}</h1>
        <h2 className={styles.cardHeader__userPosition}>
          {`${authorPosition} - 5 mins ago`}
        </h2>
      </div>
      <CardUserReactions
        isLiked={isLiked}
        handleLikePost={handleLikePost}
      />
    </div>
  );
};

CardHeader.propTypes = {
  author: PropTypes.string.isRequired,
  authorPosition: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  handleLikePost: PropTypes.func,
};

CardHeader.defaultProps = {
  isLiked: false,
  handleLikePost: () => {
    console.log('click');
  },
};

export default CardHeader;
