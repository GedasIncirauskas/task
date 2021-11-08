import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ type, color, children, click, data }) => {
  const openPage = () => {
    if (data > 0) {
      return window.open(click, '_self').focus();
    }
    return;
  };

  return (
    <button type={type} className={color} onClick={openPage}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.any,
  click: PropTypes.string,
  data: PropTypes.number,
};

export default Button;
