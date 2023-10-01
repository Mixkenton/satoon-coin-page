import React, { useState, useEffect } from 'react';
import '../styles/login.css';
import { Layout, theme, ConfigProvider, Button } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useNavigate } from "react-router-dom";


function Login() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [size, setSize] = useState<SizeType>('large');

  const navigate = useNavigate();
  const signupButton = () => navigate('/register');
  const buycoinButton = () => navigate('/buycoin');

  

  return (
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
            <div className="text-login">Login</div>
            <input type="text" className="type-1-login" placeholder="USER NAME" />
            <input type="text" className="type-1-login" placeholder="PASSWORD" />
            <div className='button-login'>
                <Button className="button-signup" type="primary" shape="round" onClick={signupButton} >
                  Sign up
                </Button>
                <span className='enter-login' onClick={buycoinButton} >&#8594;</span>
            </div>
          </div>
        </div>      
      </div>
    </div>
    </ConfigProvider>

  );

}



export default Login;