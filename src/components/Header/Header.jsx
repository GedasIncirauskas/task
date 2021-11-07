import React, { useState } from 'react';
import logo from '../../assets/CoinGate.png';
import { Button } from '../index';
import './Header.scss';

const Header = () => {
  const [open, setOpen] = useState(false);
  const url = '#';

  const openBar = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className="left_navigation">
        <img src={logo} alt="coingate" />
        <a href={url}>Products</a>
        <a href={url}>Resources</a>
        <a href={url}>Buy Instantly</a>
      </div>
      <div className="right_navigation">
        <i className="fas fa-bars" onClick={() => openBar(open)}></i>
        <a href={url}>Log In</a>
        <Button color="success">
          Sign up <i className="fas fa-chevron-right"></i>
        </Button>
      </div>
    </header>
  );
};

export default Header;
