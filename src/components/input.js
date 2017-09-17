import React from 'react';
import PropTypes from 'prop-types';

const Input = ({name, type='text', value, onChange, ...other}) => (
  <label>
    {name}:
    <input type={type}
           placeholder={name}
           value={value}
           onChange={(e) => onChange(name.toLowerCase(), e.target.value) }
           {...other}/>
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;