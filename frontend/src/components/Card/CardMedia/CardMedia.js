import PropTypes from 'prop-types';
import React from 'react';
import styles from './cardMedia.module.css';

const CardMedia = ({ imageUrl }) => {
  return (
    <div className={styles.mediaContainer}>
      {imageUrl && (
        <img className={styles.mediaImage} src={imageUrl} alt="" />
      )}
    </div>
  );
};

CardMedia.propTypes = {
  imageUrl: PropTypes.string,
};

CardMedia.defaultProps = {
  imageUrl: null,
};

export default CardMedia;
