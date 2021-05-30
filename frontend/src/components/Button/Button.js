/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';

export default function Button({
  size,
  link,
  styles,
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
        className={`btn ${size} ${styles} ${
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
  styles: 'primary',
  type: 'button',
  isLoading: false,
  children: 'click',
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  link: PropTypes.string.isRequired,
  size: PropTypes.string,
  styles: PropTypes.string,
  isLoading: PropTypes.bool,
};
