import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.css';
import CardHeader from './CardHeader/CardHeader';
import CardMedia from './CardMedia/CardMedia';

const Card = ({ cardData }) => {
  const { author, imageUrl, authorPosition, content } = cardData;

  const [isLiked, setIsLiked] = useState(false);

  const handleLikePost = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <CardHeader
          author={author}
          authorPosition={authorPosition}
          content={content}
          isLiked={isLiked}
          handleLikePost={handleLikePost}
        />
        <div className={styles.cardContent}>{content}</div>

        <CardMedia imageUrl={imageUrl} />
      </div>
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    author: PropTypes.string,
    authorPosition: PropTypes.string,
    imageUrl: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Card;
