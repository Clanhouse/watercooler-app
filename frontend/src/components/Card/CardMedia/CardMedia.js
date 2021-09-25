import PropTypes from 'prop-types';
import React from 'react';
import LinkPreview from '../LinkPreviev/LinkPreview';
import styles from './cardMedia.module.css';

const CardMedia = ({ imageUrl, video, link }) => {
  return (
    <div className={styles.mediaContainer}>
      {imageUrl && (
        <img className={styles.mediaImage} src={imageUrl} alt="" />
      )}
      {link && <LinkPreview link={link} />}
      {video && (
        <div>
          <video title="userVideo" controls>
            <source src={video} type="video/mp4" />
            <track
              src={video.captions}
              kind="captions"
              label="english_captions"
            />
          </video>
        </div>
      )}
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
  video: PropTypes.shape({
    src: PropTypes.string,
    captions: PropTypes.string,
  }),
};

CardMedia.defaultProps = {
  imageUrl: null,
  link: null,
  video: null,
};

export default CardMedia;
