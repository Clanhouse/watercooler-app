import React from 'react';
import './NumberInput.css';
import 'typeface-montserrat';
import PropTypes from 'prop-types';

function NumberInput({
   autoComplete,
   onChange,
   onBlur,
   placeholder,
   readOnly,
   size,
   type,
   value,
   error
}) {
    return (
        <input
        autoComplete={autoComplete}
        type={type}
        placeholder={placeholder}
        className={size}
        onChange={onChange}
        onBlur={onBlur}
        readOnly={readOnly}
        value={value}
        error={error}
        >
        </input>
    );
}

NumberInput.defaultProps = {
    autoComplete: 'off',
    type: 'number',
    placeholder: 'HASŁO',
    size: 'mediumNumber',
}

NumberInput.propTypes = {
    autoComplete: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    readOnly: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.func,
    error: PropTypes.func,
}


export default NumberInput;