import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.css';
import CardHeader from './CardHeader/CardHeader';
import CardMedia from './CardMedia/CardMedia';

const Card = ({ cardData }) => {
  const {
    author,
    imageUrl,
    authorPosition,
    content,
    link,
  } = cardData;

  const [isLiked, setIsLiked] = useState(false);

  const handleLikePost = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
      <CardHeader
        author={author}
        authorPosition={authorPosition}
        content={content}
        isLiked={isLiked}
        handleLikePost={handleLikePost}
      />
      <div className={styles.cardContent}>{content}</div>

      <CardMedia imageUrl={imageUrl} link={link} />
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    author: PropTypes.string,
    authorPosition: PropTypes.string,
    imageUrl: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      siteName: PropTypes.string,
    }),
  }).isRequired,
};

export default Card;
