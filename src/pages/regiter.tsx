import React, { useState, useEffect } from 'react';
import '../styles/register.css';
import { Layout, theme, ConfigProvider, Button } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useNavigate } from "react-router-dom";


function Register(){
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [size, setSize] = useState<SizeType>('large');

  const navigate = useNavigate();
  const loginButton = () => navigate('/');

  return(
    <ConfigProvider
    theme={{
      
      token: {
        "colorText": "#FFFFFF",
        "colorPrimary": "#525252",

      },
    }}>
    <div id='grad2'>
      <div className='page'>
        <div className="box-login">
          <div className="group">
            <img className='satoon-img-login' src={require("../pictures/logo.png")} />
            <div className="text-register">Register</div>
            <input type="text" className="type-1-login" placeholder="USER NAME" />
            <input type="text" className="type-1-login" placeholder="EMAIL" />
            <input type="text" className="type-1-login" placeholder="PASSWORD" />
            <input type="text" className="type-1-login" placeholder="CONFIRM PASSWORD" />
            <div className='button-login'>
                <Button className="button-login-1" type="primary" shape="round" onClick={loginButton} >
                  Login
                </Button>
                <span className='enter-login' onClick={loginButton}>&#8594;</span >
            </div>
          </div>
        </div>      
      </div>
    </div>
    </ConfigProvider>
  );
}
export default Register;