import PropTypes from 'prop-types';
import './switchInput.module.css';
import { useState } from 'react';

export default function SwitchInput({ name, children }) {
  const [switchValue, setSwitchValue] = useState(false);
  const handleChange = () => {
    setSwitchValue(!switchValue);
  };
  return (
    <>
      <label htmlFor={name}>
        {children || null}
        <input
          name={name}
          type="checkbox"
          value={switchValue}
          onChange={handleChange}
        />
      </label>
    </>
  );
}

SwitchInput.defaultProps = {
  children: '',
};

SwitchInput.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string.isRequired,
};
