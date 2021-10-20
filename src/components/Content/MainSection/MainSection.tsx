import Input from 'antd/lib/input';
import React, { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';

import { formatMonth } from '../../../utils';
import { getCurrentWeather, setInputValue } from '../../Redux/appReducer';
import m from './MainSection.module.css'

  type MainPropsType = {
    inputValue: string
      main: string
      description: string
  }

const MainSection: React.FC<MainPropsType> = (props) => {
  const dispatch = useDispatch();
  const today = new Date();
  const submitHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    dispatch(getCurrentWeather(props.inputValue))
    dispatch(setInputValue(""))
  };
  const inputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    dispatch(setInputValue((e.target as HTMLInputElement).value))
  };

  return (
<div className={m.AppWrapper}>
<Input value={props.inputValue} onChange={inputChange} onPressEnter={submitHandler} placeholder='enter the city name...' style={{borderRadius: '20px', background: 'black', width: '40%', color: 'white'}}  bordered={false} />
<div className={m.calendar}>
  <h4 className={m.day}>{`${formatMonth(today.getMonth())}, ${today.getDate()} `}</h4>
  <h1 className={m.weather}>{props.main}</h1>
  <p className={m.weatherDesc}>{props.description}</p>
</div>
</div>
  );
}

export default MainSection;
