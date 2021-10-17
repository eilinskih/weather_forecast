import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import Content from './Content/Content'
import Login from './Login/Login'
import { getForeCast, IAppState, setCoords } from './Redux/appReducer';
import { AppStateType } from './Redux/store';



const App: React.FC = () => {
  const dispatch = useDispatch()
  const {isAuthorized, main, icon, description, sunrise, sunset, windSpeed, clouds, inputValue, coords, daily, temp} =
  useSelector<AppStateType,IAppState>(({appState: 
    {isAuthorized, main, icon, description, sunrise, sunset, windSpeed, clouds, inputValue, coords, daily, temp}}) => 
  {return {isAuthorized, main, icon, description, sunrise, sunset, windSpeed, clouds, inputValue, coords, daily, temp}})
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      dispatch(setCoords(latitude, longitude))
    })
    // eslint-disable-next-line
  },[])

useEffect(() => {
    dispatch(getForeCast(coords))
        // eslint-disable-next-line
  },[coords.lat])
  return (
    <BrowserRouter>
    <Route path="/login" render={() => <Login />} />
    <Route path="/content" render={() =>
     isAuthorized ?
    <Content weatherData={{main, icon, description, sunrise, sunset, windSpeed, clouds, daily, temp}}
     inputValue={inputValue}/>:
     <Login/>} />
    <Redirect to="/content" />
    </BrowserRouter>
  );
}

export default App;
