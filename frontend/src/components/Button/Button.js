/* eslint-disable react/button-has-type */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './button.module.css';
import Loader from '../Loader/Loader';

export default function Button({
  size,
  link,
  color,
  isLoading,
  onClick,
  type,
  children,
}) {
  return (
    <Link to={link}>
      <button
        type={type}
        onClick={onClick}
        className={`${styles.btn} ${styles[size]} ${styles[color]} ${
          isLoading ? 'pointer-events-none' : null
        }`}
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : children}
      </button>
    </Link>
  );
}
Button.defaultProps = {
  size: 'small',
  color: 'primary',
  type: 'button',
  isLoading: false,
  children: 'click',
  link: '/',
  onClick: () => {
    console.log('Foo');
  },
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  link: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
};
