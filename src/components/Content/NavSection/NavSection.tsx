import { CloudOutlined } from '@ant-design/icons';
import React from 'react';

import n from './NavSection.module.css';

const NavSection: React.FC = () => {
  return (
    <div className={n.AppWrapper}>
      <div className={n.weatherInfo}>
        <div className={n.icon}>
          <CloudOutlined width='30px' height='30px'/>
          <span>24°C</span>
        </div>
        <div className={n.desc}>
          <h4>SUNNY</h4>
          <span>sunny sunny today</span>
        </div>
      </div>

      <div className={n.foreCast}>
<div className={n.day}><span>oct</span><CloudOutlined /><span>14</span></div>
<div className={n.day}><span>oct</span><CloudOutlined /><span>14</span></div>
<div className={n.day}><span>oct</span><CloudOutlined /><span>14</span></div>
<div className={n.day}><span>oct</span><CloudOutlined /><span>14</span></div>
<div className={n.day}><span>oct</span><CloudOutlined /><span>14</span></div>
      </div>
      
<div className={n.sunset}>
<span>6:30</span>
<span>17:50</span>
    </div>
    <div className={n.group}>
<div className={n.something}>
  <h3>48</h3>
<span>something</span>
</div>
<div className={n.wind}>
  <h3>12</h3>
<span>m/s</span>
</div>
</div>
    </div>
  );
}

export default NavSection;