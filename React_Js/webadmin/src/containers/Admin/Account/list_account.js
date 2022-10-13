import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import { Layout, Menu } from 'antd';
import MenuNavigation from '../../pages/Menu/Menu_navigate/index_menu';
const { Header, Content, Footer, Sider } = Layout;

const host = "http://localhost:3000";

function App() {
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState('');
  const [id, setId] = useState();

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient.connect(host)
  }, []);



  return (
        <Content
          style={{
            margin: '70px 16px 10px 30vh',
          }}
        >
          <div
            className="site-layout-background"
          >
            <p>ADMIN</p>
            {
              // indicates very long content
              Array.from(
                {
                  length: 100,
                },
                (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                  </React.Fragment>
                ),
              )
            }
          </div>
        </Content>
  );
}

export default App;