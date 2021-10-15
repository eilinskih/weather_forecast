import { Col, Row } from 'antd';
import React from 'react';
import { IForeCastData } from '../interfaces';

import a from './../../components/App.module.css'
import MainSection from './MainSection/MainSection';
import NavSection from './NavSection/NavSection';


const Content: React.FC<any> = (props) => {
  return (
    <div className={a.mainwrapper}>
      <div className={a.blur}>
      <Row style={{width: '80%', height: '80%'}} >
    <Col span={16} ><MainSection weatherCurrentData={props.weatherCurrentData} inputValue={props.inputValue}/></Col>
        <Col span={8} ><NavSection /></Col>
      </Row>
    </div>
</div>
  );
}

export default Content;