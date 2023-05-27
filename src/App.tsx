import coldDay from './images/cold.jpg';
import sunnyDay from './images/sunny.jpg'
import cloudyIcon from './images/cloudy.png'

import React from 'react';

function App() {
  return (
    <div className='App' style={{ backgroundImage: `url(${coldDay})` }}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section_inputs'>
            <input type='text' name='city' placeholder='Enter city...' />
            <button>°F</button>
          </div>
          <div className='section section_temperature'>
            <div className='icon'>
              <h3>Istanbul TR</h3>
              <img src={cloudyIcon} alt='icon' width={80}/>
              <h3>Cloudy</h3>
            </div>
            <div className='temperature'>
              <h3>20 °C</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
