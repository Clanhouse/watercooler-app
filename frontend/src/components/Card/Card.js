import PropTypes from 'prop-types';
import styles from './card.module.css';
import Avatar from '../Avatar/Avatar';
import CardContent from './CardContent/CardContent';
import CardUserReactions from './CardUserReactions/CardUserReactions';
import CardMedia from './CardMedia/CardMedia';

const Card = ({ cardData }) => {
  const { userName, imageUrl, userPosition, content } = cardData;
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <header className={styles.card__header}>
          <Avatar size="large" />
          <CardContent
            userName={userName}
            userPosition={userPosition}
            content={content}
          />
          <CardUserReactions />
        </header>
        <CardMedia imageUrl={imageUrl} />
      </div>
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    userName: PropTypes.string,
    position: PropTypes.string,
    imageUrl: PropTypes.string,
    content: PropTypes.string,
    userPosition: PropTypes.string,
  }).isRequired,
};

export default Card;
