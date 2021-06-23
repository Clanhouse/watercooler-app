import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import styles from './selectInput.module.css';

export default function SelectInput({
  children,
  name,
  form,
  options,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
      <label htmlFor={`${name}`}>
        {children}
        <select
          defaultValue={selectedOption}
          onBlur={setSelectedOption}
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
    </div>
  );
}
SelectInput.defaultProps = {
  form: '',
};

SelectInput.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  form: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
