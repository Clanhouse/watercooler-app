import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './datePicker.module.css';

export default function DatePicker({ children }) {
  const [dateState, setDateState] = useState({
    date: new Date(Date.now()),
  });
  const dateFromPicker = (event) => {
    return setDateState({ date: new Date(event.target.value) });
  };

  return (
    <div>
      <label htmlFor="date">
        {children}
        <input
          name="date"
          className={`${styles.datePicker}`}
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
          min="1900-01-01"
          max="2100-01-01"
          value={dateState.value}
          onChange={dateFromPicker}
        />
      </label>
    </div>
  );
}

DatePicker.defaultProps = {
  children: '',
};
DatePicker.propTypes = {
  children: PropTypes.string,
};
