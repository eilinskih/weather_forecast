import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { getWeatherData } from './api/api';

import Content from './Content/Content'
import Login from './Login/Login'
import { getCurrentWeather, getForeCast, IAppState, setCoords } from './Redux/appReducer';
import { AppStateType } from './Redux/store';



const App: React.FC = () => {
  const dispatch = useDispatch()
  const {inputValue, weatherCurrentData, isAuthorized, weatherForecastData, coords} = useSelector<AppStateType,IAppState>(({appState: {inputValue, weatherCurrentData, isAuthorized, weatherForecastData, coords}}): IAppState => {return {inputValue, weatherCurrentData, isAuthorized, weatherForecastData, coords}})
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      dispatch(setCoords(latitude, longitude))
    })
  },[])

useEffect(() => {
    // dispatch(getForeCast(coords))
    dispatch(getCurrentWeather(inputValue))
  },[coords.lat])

  return (
    <BrowserRouter>
    <Route path="/login" render={() => <Login />} />
    <Route path="/content" render={() => <Content weatherCurrentData={weatherCurrentData} inputValue={inputValue}/>} />
    </BrowserRouter>
  );
}

export default App;
