import { Layout, Menu } from 'antd';
import React from 'react';
import { items_admin } from '../../Navigate/Menu/index_menu'
const { Header, Content, Footer, Sider } = Layout;

const App = () => (
  <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        paddingTop: '62px',
      }}
      collapsible 
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items_admin} onClick={e => console.log(e)} />
    </Sider>
    <Layout
      className="site-layout"
    >
      <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        paddingLeft:200,
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      />
    </Header>
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
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);

export default App;