import React, { useState } from 'react';
import { Button, Selector } from '../index';
import { data } from '../utils/Data.jsx';
import { description } from '../utils/ContentText.jsx';
import './Form.scss';

const Form = () => {
  const [pay, setPay] = useState('');
  const [buy, setBuy] = useState('');
  const [icon, setIcon] = useState('eur');
  const [cryptIcon, setCryptIcon] = useState('btc');
  const [curr, setrCurr] = useState('EUR');

  let newDataPay = Object.keys(data.merchant);
  let newDataBuy = Object.keys(data.trader.buy);

  const calculation = (value) => {
    const titleOfCurren = icon.toUpperCase();
    const upperCaseForCrypto = cryptIcon.toUpperCase();
    const inputValue = parseFloat(data.merchant[titleOfCurren].EUR);
    const valueIntoEur = parseFloat(value) * inputValue;
    const calculation = parseFloat(data.trader.buy[upperCaseForCrypto].EUR);
    const result = (valueIntoEur / calculation).toFixed(5);
    console.log(value, inputValue);
    setPay(value);
    setBuy(result);
  };

  const getCurrency = (currencyName) => {
    let title = currencyName.toLowerCase();
    setrCurr(currencyName);
    calculation(pay);
    setIcon(title);
  };

  const getCrypto = (cryptoTitle) => {
    const crypto = cryptoTitle.toLowerCase();
    setCryptIcon(crypto);
  };

  const getIcon = () => {
    const image = require(`../../assets/icon/${icon}.svg`);
    if (image) {
      return image.default;
    }
    return require(`../../assets/icon/eur.svg`);
  };

  return (
    <div className="form_wrapper">
      <div></div>
      {console.log(data.trader)}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPay('');
          setBuy('');
        }}
      >
        <div className="input_block">
          <input
            type="text"
            value={pay}
            required
            onChange={(e) => calculation(e.target.value)}
          />
          <img src={getIcon()} alt={icon} />
          <select
            name="pay"
            id="pay"
            value={curr}
            onChange={(e) => getCurrency(e.target.value)}
          >
            {newDataPay.map((item, index) => (
              <option key={item || index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="input_block">
          <input
            type="text"
            value={buy || ''}
            onChange={(e) => setBuy(e.target.value)}
          />
          <img
            src={require(`../../assets/icon/${cryptIcon}.svg`).default}
            alt={cryptIcon}
          />
          <select
            name="buy"
            id="buy"
            onChange={(e) => getCrypto(e.target.value)}
          >
            {newDataBuy.map((item, index) => (
              <option key={item || index}>{item}</option>
            ))}
          </select>
        </div>

        <p>Payment method</p>
        <div className="input_block">
          <Selector />
        </div>
        <Button
          type="submit"
          color={buy.length > 0 ? 'success' : 'default'}
          click="page"
        >
          {`Buy ${cryptIcon.toUpperCase()}`}
        </Button>
      </form>
      <p className="mobile-only">{description}</p>
    </div>
  );
};

export default Form;
