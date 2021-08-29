import PropTypes from 'prop-types';
import styles from './avatar.module.css';
import avatar from './assets/avatar.png';

const Avatar = ({ source, size }) => {
  return (
    <img
      src={source}
      alt="avatar"
      className={`${styles.avatar} ${styles[size]}`}
    />
  );
};

Avatar.propTypes = {
  source: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Avatar.defaultProps = {
  source: avatar,
  size: 'small',
};

export default Avatar;
