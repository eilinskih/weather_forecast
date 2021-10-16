import Input from 'antd/lib/input';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CurrentType } from '../../interfaces';
import { getCurrentWeather, setInputValue } from '../../Redux/appReducer';

import m from './MainSection.module.css'

const MainSection: React.FC<any> = (props) => {
  const dispatch = useDispatch()
  const today = new Date()
  const submitHandler = (e: any) => {
    dispatch(getCurrentWeather(props.inputValue))
    dispatch(setInputValue(""))
  }
  const inputChange = (e: any) => {
    dispatch(setInputValue(e.target.value))
  }

  console.log(props)
  return (
<div className={m.AppWrapper}>
<Input value={props.inputValue} onChange={inputChange} onPressEnter={submitHandler} placeholder='enter the city name...' style={{borderRadius: '20px', background: 'black', width: '40%', color: 'white'}}  bordered={false} />
<div className={m.calendar}>
  <h4 className={m.day}>{`${today.getMonth()}, ${today.getDate()} `}</h4>
  <h1 className={m.weather}>{props.weatherCurrentData.weather[0].main}</h1>
  <p className={m.weatherDesc}>sunny non-wind</p>
</div>
</div>
  );
}

export default MainSection;
