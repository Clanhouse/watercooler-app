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
    timestamp,
  } = cardData;

  const [isLiked, setIsLiked] = useState(false);

  const handleLikePost = () => {
    setIsLiked(!isLiked);
  };

  const calculatePostTime = (time) => {
    const currentTime = Date.now();
    const timeDifference = (currentTime - time) / (1000 * 60);
    if (timeDifference < 1) return '1 min';
    if (timeDifference < 60)
      return `${timeDifference.toFixed(0)} min`;
    if (timeDifference >= 60 && timeDifference < 60 * 24)
      return `${(timeDifference / 60).toFixed(0)} hours`;
    return `${timeDifference / (60 * 24).toFixed(0)} days`;
  };

  return (
    <div className={styles.card}>
      <CardHeader
        author={author}
        authorPosition={authorPosition}
        content={content}
        isLiked={isLiked}
        handleLikePost={handleLikePost}
        time={calculatePostTime(timestamp)}
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
    timestamp: PropTypes.number,
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
