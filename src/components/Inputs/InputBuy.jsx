import React from 'react';

import PropTypes from 'prop-types';
import './Input.scss';

const InputBuy = ({ buy, setBuy, cryptIcon, getCrypto, data }) => {
  const getIcon = () => {
    const image = require(`../../assets/icon/${cryptIcon}.svg`);
    if (image) {
      return image.default;
    }
    return require(`../../assets/icon/eur.svg`);
  };

  return (
    <div className="input_block">
      <input type="number" value={buy || ''} onChange={(e) => setBuy(e.target.value)} min={0} />
      <img src={getIcon()} alt={cryptIcon} />
      <select name="buy" id="buy" onChange={(e) => getCrypto(e.target.value)}>
        {data.map((item, index) => (
          <option key={item || index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

InputBuy.propTypes = {
  buy: PropTypes.number.isRequired,
  cryptIcon: PropTypes.string,
  getCrypto: PropTypes.func,
  setBuy: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InputBuy;
