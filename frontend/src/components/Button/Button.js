import React from 'react';
import './button.css';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';

export default function Button({
  buttonSize,
  buttonLink,
  isLoading,
  onClick,
  action,
}) {
  return (
    <button
      type={action ? 'button' : 'submit'}
      onClick={onClick}
      className={buttonSize}
    >
      {isLoading ? <Loader /> : buttonLink}
    </button>
  );
}
Button.defaultProps = {
  action: true,
  buttonSize: 'small',
  buttonLink: 'click',
  isLoading: false,
};

Button.propTypes = {
  buttonSize: PropTypes.string,
  action: PropTypes.bool,
  buttonLink: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
