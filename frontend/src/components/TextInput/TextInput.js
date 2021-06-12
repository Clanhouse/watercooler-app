import React from 'react';
import './TextInput.css';
import 'typeface-montserrat';

function TextInput({
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

TextInput.defaultProps = {
    autoComplete: 'off',
    type: 'text',
    placeholder: 'LOGIN',
    size: 'medium',
}




export default TextInput;