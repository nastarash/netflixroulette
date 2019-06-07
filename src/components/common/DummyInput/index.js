import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const DummyInput = ({ onInput, value }) => (
  <div className="input">
    <span className="input__icon">&#8629;</span>
    <input
      className="input__text"
      type="text"
      onInput={onInput}
      defaultValue={value}
    />
  </div>
);

DummyInput.propTypes = { onInput: PropTypes.any, value: PropTypes.string };
