import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './selectInput.module.css';

export default function SelectInput({
  children,
  name,
  form,
  options,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (event) => {
    setSelectedOption(event.target);
  };
  return (
    <label htmlFor={`${name}`}>
      {children}

      <select
        className={`${styles.selectInput}`}
        defaultValue={selectedOption}
        onBlur={handleChange}
        name={`${name}`}
        from={`${form}`}
      >
        {options.map((option) => {
          return (
            <option key={uuidv4()} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );
}
SelectInput.defaultProps = {
  form: '',
  children: '',
};

SelectInput.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string.isRequired,
  form: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
