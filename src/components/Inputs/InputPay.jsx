import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const InputPay = ({ pay, calculation, icon, curr, getCurrency, data }) => {
  const getIcon = () => {
    const image = require(`../../assets/icon/${icon}.svg`);
    if (image) {
      return image.default;
    }
    return require(`../../assets/icon/eur.svg`);
  };

  return (
    <div className="input_block">
      <input
        type="number"
        value={pay || ''}
        min={0}
        required
        onChange={(e) => calculation(e.target.value)}
      />
      <img src={getIcon()} alt={icon} />
      <select id="pay" value={curr} onChange={(e) => getCurrency(e.target.value)}>
        {data.map((item, index) => (
          <option key={item || index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

InputPay.defaultProps = {
  icon: 'eur',
};

InputPay.propTypes = {
  pay: PropTypes.number.isRequired,
  calculation: PropTypes.func,
  icon: PropTypes.string,
  curr: PropTypes.string,
  getCurrency: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InputPay;
