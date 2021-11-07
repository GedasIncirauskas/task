import React, { useState } from 'react';
import { payment } from '../utils/Methods.jsx';

const Selector = () => {
  const [methods, setMethods] = useState(0);

  const iconChangeHandler = (index) => {
    setMethods(index);
  };
  return (
    <div>
      <img src={payment[methods].image} alt={payment[methods].alt} />
      <select
        name="transfer"
        id="transfer"
        onChange={(e) => iconChangeHandler(e.target.value)}
      >
        {payment.map((item, index) => (
          <option key={item.id} value={index}>
            {item.method}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
