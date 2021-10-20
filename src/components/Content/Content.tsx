import { Col, Row } from 'antd';
import React from 'react';

import Preloader from '../Preloader';
import a from './../../components/App.module.css'
import MainSection from './MainSection/MainSection';
import NavSection from './NavSection/NavSection';

type ContentPropsType = {
  inputValue: string
  weatherData: {
    main: string
    icon: string
    description: string
    temp: null | number
    sunrise: number
    sunset: number
    windSpeed: null | number
    clouds: null | number
    daily: { date: number, icon: string }[]
  }
}

const Content: React.FC<ContentPropsType> = (props) => {
  if (props.weatherData.main === "") return <Preloader />
  return (
    <div className={a.mainwrapper}>
      <div className={a.blur}>
        <Row style={{ width: '80%', height: '80%' }} >
          <Col span={16} ><MainSection main={props.weatherData.main} description={props.weatherData.description} inputValue={props.inputValue} /></Col>
          <Col span={8} ><NavSection weatherData={props.weatherData} /></Col>
        </Row>
      </div>
    </div>
  );
}

export default Content;