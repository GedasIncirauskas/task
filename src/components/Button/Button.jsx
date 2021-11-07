import React from 'react';
import './Button.scss';

const Button = ({ type, color, children, click }) => {
  const openPage = () => {
    window.open(click, '_self').focus();
  };

  return (
    <button type={type || 'button'} className={color} onClick={openPage}>
      {children}
    </button>
  );
};

export default Button;
