import coldDay from './images/cold.jpg';
import sunnyDay from './images/sunny.jpg'

import React, { useEffect } from 'react';
import Conditions from './components/Conditions';
import { getWeatherData } from './weatherApiService';

function App() {

  useEffect(() => {
    const fetchWeatherData =async () => {
      const data = await getWeatherData('istanbul');
      console.log(data);
    }

    fetchWeatherData();
  }, []);
  return (
    <div className='App' style={{ backgroundImage: `url(${coldDay})` }}>
      <div className='overlay'>
        <div className='container'>
          <div className='content content_input'>
            <input type='text' name='city' placeholder='Enter city...' />
            <button>°F</button>
          </div>
          <div className='content content_temperature'>
            <div className='icon'>
              <h3>Istanbul TR</h3>
              <img src='http://openweathermap.org/img/wn/04d@2x.png' alt='icon' width={80}/>
              <h3>Cloudy</h3>
            </div>
            <div className='temperature'>
              <h3>20 °C</h3>
            </div>
          </div>
          <Conditions />
        </div>
      </div>
    </div>
  );
}

export default App;
