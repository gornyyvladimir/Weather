import React from 'react';
import moment from 'moment';

const WeatherPage = ({weekWeather, city, hasError, onChange, country}) => {
  const days = {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'
  };


  return(
      <div>
        {
          hasError ? <p>Error</p> : 
          <div>
            {`${city}, ${country}`}
            <ul>
            {
              weekWeather && weekWeather.map((item,key) => (
                <li key={key}>{`${moment(new Date(item.dayWeather.dt*1000)).calendar(null, days)} ${item.dayWeather.temp.day}`}</li>
              ))
            }
            </ul>
          </div>
        }
        <input type="text" onChange={onChange} />
      </div>
  );
};

export default WeatherPage;