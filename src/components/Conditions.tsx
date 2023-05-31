import React from 'react';
import  './conditions.css';

import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';
import { SiWindicss } from 'react-icons/si';
import { ImHappy } from 'react-icons/im';
import { TbGauge } from 'react-icons/tb';
import { WiHumidity } from 'react-icons/wi';

const Conditions = ({weather, units}: {weather: any; units: any}) => {
  const tempUnit = units === 'metric' ? '°C' : '°F';
  const windUnit = units === 'metric' ? 'm/s' : 'm/h';

    const cards = [
      {
        id: 1,
        icon: <FaArrowAltCircleDown/>,
        title: 'min',
        data: weather.temp_min?.toFixed(),
        unit: tempUnit
      },
      {
        id: 2,
        icon: <FaArrowAltCircleUp/>,
        title: 'max',
        data: weather.temp_max?.toFixed(),
        unit: tempUnit
      },
      {
        id: 3,
        icon: <ImHappy/>,
        title: 'feels like',
        data: weather.feels_like?.toFixed(),
        unit: tempUnit
      },
      {
        id: 4,
        icon: <TbGauge/>,
        title: 'pressure',
        data: weather.pressure,
        unit: 'hPa'
      },
      {
        id: 5,
        icon: <WiHumidity/>,
        title: 'humidity',
        data: weather.humidity,
        unit: '%'
      },
      {
        id: 6,
        icon: <SiWindicss/>,
        title: 'wind speed',
        data: weather.speed?.toFixed(),
        unit: windUnit
      },
    ];
  return (
    <div className='content content_conditions'>
      {cards.map(({id, icon, title, data, unit}) => (
      <div key={id} className='card'>
        <div className="conditions_icon">
          {icon}
          <small>{title}</small>
        </div>
        <h3>{`${data} ${unit}`}</h3>
      </div>
      ))}
    </div>
  );
};

export default Conditions;