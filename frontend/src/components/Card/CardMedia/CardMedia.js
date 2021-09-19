import PropTypes from 'prop-types';
import React from 'react';
import LinkPreview from '../LinkPreviev/LinkPreview';
import styles from './cardMedia.module.css';

const CardMedia = ({ imageUrl, link }) => {
  return (
    <div className={styles.mediaContainer}>
      {imageUrl && (
        <img className={styles.mediaImage} src={imageUrl} alt="" />
      )}
      {link && <LinkPreview link={link} />}
    </div>
  );
};

CardMedia.propTypes = {
  imageUrl: PropTypes.string,
  link: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    siteName: PropTypes.string,
  }),
};

CardMedia.defaultProps = {
  imageUrl: null,
  link: null,
};

export default CardMedia;
