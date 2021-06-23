import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './datePicker.module.css';

export default function DatePicker({ children, name }) {
  const [dateState, setDateState] = useState({
    date: new Date(Date.now()),
  });
  const dateFromPicker = (event) => {
    console.log(dateState);
    return setDateState({ date: new Date(event.target.value) });
  };

  return (
    <div>
      <label htmlFor={`${name}`}>
        {children}

        <input
          name={`${name}`}
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

DatePicker.defaultProps = {};
DatePicker.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
