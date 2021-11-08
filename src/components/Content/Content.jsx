import React from 'react';
import { description } from '../utils/ContentText.jsx';
import './Content.scss';

const Content = () => {
  const url = '#';
  return (
    <div className="content_block">
      <h1>
        <span>Buy Bitcoin,</span> Ethereum, Litecoin and other crypto <span>online</span>
      </h1>
      <p>{description}</p>
      <a href={url}>
        Start now <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default Content;
