/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';

export default function Button({
  buttonSize,
  buttonLink,
  buttonStyles,
  isLoading,
  onClick,
  type,
  value,
}) {
  // eslint-disable-next-line no-unused-vars
  const STYLES = [];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${buttonSize} ${buttonStyles} `}
    >
      <Link to={buttonLink}>{isLoading ? <Loader /> : value}</Link>
    </button>
  );
}
Button.defaultProps = {
  buttonSize: 'small',
  buttonStyles: 'primary',
  type: 'button',
  isLoading: false,
  value: 'click',
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  buttonLink: PropTypes.string.isRequired,
  buttonSize: PropTypes.string,
  buttonStyles: PropTypes.string,
  isLoading: PropTypes.bool,
};
