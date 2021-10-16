import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      style={{width: '350px', height: '400px', position: 'fixed', top: '20%', left: '40%'}}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
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
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

      </Form.Item>

      <Form.Item>
        <Button style={{marginRight: '50px'}} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="https://home.openweathermap.org/users/sign_up">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Login;