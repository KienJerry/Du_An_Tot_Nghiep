import { Layout } from 'antd';
import React from 'react';
const { Content } = Layout;

function IndexContentAdmin() {
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

export default IndexContentAdmin;