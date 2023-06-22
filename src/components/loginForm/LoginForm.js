import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {Button, Checkbox, Form, Input} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import './loginForm.css'
import phoenixImage from '../../images/phoenix-image.jpg' 





export default function LoginForm(){



  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate();

  function onFinish(values){

    if (values['email']=='abrar.showkat@valiantbmedia.com' && values['password']=='f5f2cenauhh'){
      console.log("Submitted the form")
      navigate('/dashboard')
      setIsActive(false)
      
      
    }
    else{
      setIsActive(true)
      
    }

}

    return (
      <div className="container">
      <div className="image-container">
        <img src={phoenixImage} className="image"></img>
        </div>
        <div className="form-container">
        
        <h5 className="form-title">Login to Phoenix Dashboard</h5>
        {isActive?<h5 className="error-message">Email and Password didn't match</h5>:null}

        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item label=''
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
        {/* <Input.Password /> */}
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="#">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" className="login-form-button">
          Log in
        </Button>
       
      </Form.Item>

  
      
    </Form>
    
        </div>
        </div>

    );
}