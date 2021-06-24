import PropTypes from 'prop-types';
import './switchInput.module.css';

export default function SwitchInput({
  name,
  value,
  checked,
  children,
}) {
  return (
    <>
      <label htmlFor={name}>
        {children || null}
        <input
          defaultValue={value || false}
          name={name}
          type="checkbox"
          checked={checked}
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
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};
