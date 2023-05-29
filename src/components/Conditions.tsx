import React from 'react';
import  './conditions.css';

import { FaArrowAltCircleDown } from 'react-icons/fa';

const Conditions = () => {
  return (
    <div className='content content_conditions'>
      <div className='card'>
        <div className="conditions_icon">
          <FaArrowAltCircleDown />
          <small>min</small>
        </div>
        <h3>17 °C</h3>
      </div>
      <div className='card'>
        <div className="conditions_icon">
          <FaArrowAltCircleDown />
          <small>min</small>
        </div>
        <h3>17 °C</h3>
      </div>
      <div className='card'>
        <div className="conditions_icon">
          <FaArrowAltCircleDown />
          <small>min</small>
        </div>
        <h3>17 °C</h3>
      </div>
      <div className='card'>
        <div className="conditions_icon">
          <FaArrowAltCircleDown />
          <small>min</small>
        </div>
        <h3>17 °C</h3>
      </div>
    </div>
  );
};

export default Conditions;