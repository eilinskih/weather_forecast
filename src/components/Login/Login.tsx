import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux';
import { auth } from '../Redux/appReducer';

const Login = () => {
  const dispatch = useDispatch()
  const onFinish = (values: any) => {
    dispatch(auth(values));
  };

  return (
    <Form
      style={{width: '350px', height: '400px', position: 'fixed', top: '20%', left: '40%'}}
      name="normal_login"
      className="login-form"
      // initialValues={}
      onFinish={onFinish}
    >
      <h1>You are not authorized</h1>
      <Form.Item
        name="login"
        rules={[{ required: true, message: 'Please input your Username!' }, {type: 'string'}, { min: 4, message: 'field must includes more than 4 symbols'}]}
      >
        <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }, {pattern: /^[a-z0-9]+$/ && /[a-z]/ && /[0-9]/, message: 'field must includes letters and numbers'}]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

      </Form.Item> */}

      <Form.Item>
        <Button style={{marginRight: '50px'}} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;