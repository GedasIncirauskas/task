import React, { useState, useEffect } from 'react';
import { Button, Selector, InputPay, InputBuy } from '../index';
import { data } from '../utils/Data.jsx';
import { description } from '../utils/ContentText.jsx';
import './Form.scss';

const Form = () => {
  const [pay, setPay] = useState();
  const [buy, setBuy] = useState();
  const [icon, setIcon] = useState('eur');
  const [cryptIcon, setCryptIcon] = useState('btc');
  const [curr, setCurr] = useState('EUR');

  let newDataPay = Object.keys(data.merchant);
  let newDataBuy = Object.keys(data.trader.sell);
  let payToNumber = parseFloat(pay);
  let buyToNumber = parseFloat(buy);

  const calculation = (value) => {
    const titleOfCurren = icon.toUpperCase();
    const upperCaseForCrypto = cryptIcon.toUpperCase();
    const inputValue = parseFloat(data.merchant[titleOfCurren].EUR);
    const valueIntoEur = parseFloat(value) * inputValue;
    const getEurValue = parseFloat(data.trader.sell[upperCaseForCrypto].EUR);
    const result = (valueIntoEur / getEurValue).toFixed(6);
    setPay(value);
    setBuy(result);
  };

  const getCurrency = (currencyName) => {
    let title = currencyName.toLowerCase();
    setIcon(title);
    setCurr(currencyName);
  };

  const getCrypto = (cryptoTitle) => {
    const crypto = cryptoTitle.toLowerCase();
    setCryptIcon(crypto);
  };

  const calculationBuy = () => {
    const cryptoTitle = cryptIcon.toUpperCase();
    const cryptoValue = parseFloat(data.trader.sell[cryptoTitle].EUR);
    const resultofCrypto = parseFloat(buy) * cryptoValue;
    setBuy(resultofCrypto);
  };

  useEffect(() => {
    calculation(pay);
  }, [curr]);

  useEffect(() => {
    calculationBuy(buy);
  }, [cryptIcon]);

  return (
    <div className="form_wrapper">
      <div className="form-shadow"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPay('');
          setBuy('');
        }}
      >
        <InputPay
          pay={payToNumber}
          calculation={calculation}
          icon={icon}
          curr={curr}
          getCurrency={getCurrency}
          data={newDataPay}
        />
        <InputBuy
          buy={buyToNumber}
          setBuy={setBuy}
          cryptIcon={cryptIcon}
          getCrypto={getCrypto}
          data={newDataBuy}
        />
        <p>Payment method</p>
        <div className="input_block">
          <Selector />
        </div>
        <Button
          type="submit"
          color={buyToNumber > 0 ? 'success' : 'default'}
          click="/"
          data={buyToNumber}
        >
          {`Buy ${cryptIcon.toUpperCase()}`}
        </Button>
      </form>
      <p className="mobile-only">{description}</p>
    </div>
  );
};

export default Form;
