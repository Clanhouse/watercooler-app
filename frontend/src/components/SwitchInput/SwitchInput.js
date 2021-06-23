import PropTypes from 'prop-types';
import styles from './switchInput.module.css';

export default function SwitchInput({ name }) {
  return (
    <label htmlFor={`${name}`} className={`${styles.switch__label}`}>
      <input
        name={`${name}`}
        type="checkbox"
        className={`${styles.switch__input}`}
      />
      <span className={`${styles.switch__slider}`} />
    </label>
  );
}

SwitchInput.defaultProps = {
  name: 'switch',
};

SwitchInput.propTypes = {
  name: PropTypes.string,
};
