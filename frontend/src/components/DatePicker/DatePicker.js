import React from 'react';
import PropTypes from 'prop-types';
import styles from './datePicker.module.css';

export default function DatePicker({ children }) {
  return (
    <div>
      <label htmlFor="date">
        {children || `Data`}
        <input
          id="datePickerComponent"
          name="date"
          className={`${styles.datePicker}`}
          type="date"
          pattern="\d{4}-\d{2}-\d{2}"
        />
      </label>
    </div>
  );
}

DatePicker.defaultProps = {
  children: 'Data',
};
DatePicker.propTypes = {
  children: PropTypes.string,
};
