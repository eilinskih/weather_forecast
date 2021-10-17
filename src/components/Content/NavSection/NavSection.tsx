import React from 'react';
import { formatMonth } from '../../../utils';

import n from './NavSection.module.css';

type NavPropsType = {
  weatherData: {
  main: string
  icon: string
  description: string
  temp: null | number
  sunrise: number
  sunset: number
  windSpeed: null | number
  clouds: null | number
  daily: {date: number, icon: string}[]
  }
}

const NavSection: React.FC<NavPropsType> = (props) => {
  return (
    <div className={n.AppWrapper}>
      <div className={n.weatherInfo}>
        <div className={n.icon}>
        <img src={`http://openweathermap.org/img/wn/${props.weatherData.icon}@2x.png`} alt="img" />
          <span>{`${(props.weatherData.temp)?.toFixed()}°C`}</span>
        </div>
        <div className={n.desc}>
          <h4>{props.weatherData.main}</h4>
          <span>{props.weatherData.description}</span>
        </div>
      </div>

      <div className={n.foreCast}>
        {props.weatherData.daily.map((item) => {
          return (
<div key={item.date} className={n.day}>
  <span>{formatMonth(new Date(Date.now() - item.date).getMonth())}</span>
  <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt="" />
  <span>{new Date(Date.now() - item.date).getDate()}</span>
  </div>
          )
        })}
      </div>
      
<div className={n.sunset}>
<span>sunrise<br/>{`${new Date(Date.now() - props.weatherData.sunrise).getHours()}: ${new Date(Date.now() - props.weatherData.sunrise).getMinutes()}`}</span>
<span>sunset<br/>{`${new Date(Date.now() - props.weatherData.sunset).getHours()}: ${new Date(Date.now() - props.weatherData.sunset).getMinutes()}`}</span>
    </div>
    <div className={n.group}>
<div className={n.something}>
  <h3>{`${props.weatherData.clouds}%`}</h3>
<span>clouds</span>
</div>
<div className={n.wind}>
  <h3>{props.weatherData.windSpeed}</h3>
<span>m/s</span>
</div>
</div>
    </div>
  );
}

export default NavSection;