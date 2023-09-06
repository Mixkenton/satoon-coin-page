import React, { useState, useEffect } from 'react';
import './index.css';
import './styles/header.css';
import './styles/content.css';
import './styles/header';



import { Layout, theme, ConfigProvider, Button } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,

} from "react-router-dom";

const { Header } = Layout;


const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  userSelect: 'none',
  height: '84px',
  alignItems: 'center',
  borderBottom: '1px solid',
  borderBottomColor: '#0C134F',
}


function App() {


  useEffect(() => {
    const script = document.createElement('script');
    script.src = './styles/header';
    script.async = true;
  }

  )
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [size, setSize] = useState<SizeType>('large');
  return (
    <Router>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              colorBgHeader: "#0C134F",

            }
          },
          token: {
            "colorText": "#FFFFFF",
            "colorPrimary": "#5C469C",

          },
        }}>
        <Layout className="layout">
          <Header style={headerStyle}>

            <div className='header-left-side'>
              <div className='satoon'>
                <img className='satoon-img' src={require("./pictures/logo.png")} />
              </div>
              <div className='search-input-on-top'>

                <form action="">
                  <div className='search-input'>
                    <input type="search" required />
                    <i className="fa fa-search">
                      <img className="search-icon" src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="search--v1" />
                    </i>
                  </div>

                </form>
              </div>
              <div className='text-on-top'>HOME</div>
              <div className='text-on-top'>Categories</div>
              <div className='text-on-top'>Following</div>
              <div className='text-on-top'>History</div>
            </div>

            <div className='header-right-side'>
              <div className="box">
                <div className="my-coin">
                  <div className="overlap-group">
                    <p className="element">
                      <span className="text-wrapper">0</span>
                      <span className="span"> 🪙</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="image">
                <img className="profile" alt="Profile" src={require("./pictures/profile.png")} />
              </div>
              <div className='button-on-top' >
                <Button type="primary" shape="round" size={size}>
                  Publish
                </Button>
                <div className="box2">
                  <div className="burger">
                    <div className="rectangle" />
                    <div className="div" />
                    <div className="rectangle-2" />
                  </div>
                </div>

              </div>



            </div>
          </Header>

          <div id="grad1">
            <div className="box3">
              <div className="group">
                <div className="overlap">
                  <div className="overlap-group">
                    <div className="text-wrapper">เหรียญของฉัน</div>
                    <div className="my-coin">
                      <div className="div-wrapper">
                        <div className="div">0</div>
                      </div>
                    </div>
                  </div>

                  <img className="image" alt="Image" src={require("./pictures/image-4.png")} />
                </div>
              </div>
            </div>

            <div className="box4">
            <div className='box4-flex'>
              <div className="box">
                  <div className="group">
                    <div className="overlap-group">
                      <div className="rectangle"><div className='box4-text'>THB 40</div></div>
                      <div className="overlap">
                        <div className="text-wrapper">185</div>
                        <img className="image" alt="Image" src={require("./pictures/image-4.png")}/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='box4-flex'>
              <div className="box">
                  <div className="group">
                    <div className="overlap-group">
                      <div className="rectangle"><div className='box4-text'>THB 100</div></div>
                      <div className="overlap">
                        <div className="text-wrapper">185</div>
                        <img className="image" alt="Image" src={require("./pictures/image-4.png")}/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='box4-flex'>
              <div className="box">
                  <div className="group">
                    <div className="overlap-group">
                      <div className="rectangle"><div className='box4-text'>THB 200</div></div>
                      <div className="overlap">
                        <div className="text-wrapper">185</div>
                        <img className="image" alt="Image" src={require("./pictures/image-4.png")}/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='box4-flex'>
              <div className="box">
                  <div className="group">
                    <div className="overlap-group">
                      <div className="rectangle"><div className='box4-text'>THB 350</div></div>
                      <div className="overlap">
                        <div className="text-wrapper">185</div>
                        <img className="image" alt="Image" src={require("./pictures/image-4.png")}/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='box4-flex'>
              <div className="box">
                  <div className="group">
                    <div className="overlap-group">
                      <div className="rectangle" >
                        <div className='box4-text'>THB 1000</div>
                      </div>
                      <div className="overlap">
                        <div className="text-wrapper">185</div>
                        <img className="image" alt="Image" src={require("./pictures/image-4.png")}/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            </div>

            {/* <div className='cover-toon'>
              <div className='cover-toon-flex'>

                <img className='coverIMG' src={require("./pictures/pxfuel.jpg")} />
                <div className='cover-toon-decribtion'>
                  <div className='textHead-decribtion'>toonname</div>
                  <div className='name-creator-text'>
                    <div className='by-text'>By</div>
                    <div className='creatorname'>creatorname</div>
                  </div>
                  <div className='shortstory'>
                    short story short story short story
                    short story short story short story
                    short story short story
                  </div>
                  <div className='footer-decribtion'>
                    <div className='heart-icon-count'>
                      <img className='heart-icon' src={require("./pictures/heart-icon.png")} />
                      <div className='count-heart'>
                        2.3 M
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div> */}
          </div>





        </Layout>

      </ConfigProvider>
    </Router>


  );
}

export default App;
