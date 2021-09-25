import PropTypes from 'prop-types';
import styles from './linkPreview.module.css';

const LinkPreview = ({ link }) => {
  return (
    <div className={styles.container}>
      <img src={link.image} alt={link.title} />
      <div className={styles.titleContainer}>
        <p className={styles.site}>{link.siteName}</p>
        <a href={link.url} className={styles.link}>
          {link.title}
        </a>
      </div>
    </div>
  );
};

LinkPreview.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    siteName: PropTypes.string,
  }).isRequired,
};

export default LinkPreview;
