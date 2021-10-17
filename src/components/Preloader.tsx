import { Spin } from "antd";

const Preloader = () => {
    return (
        <Spin size='large' style={{position: 'fixed', left: '50%', top: '50%'}}/> 
    )
}

export default Preloader;