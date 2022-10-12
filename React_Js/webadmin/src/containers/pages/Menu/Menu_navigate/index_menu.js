import { Layout, Menu } from 'antd';
import React from 'react';
import { items_admin  } from '../../../../components/Menu/Menu_navigate/index_menu';
import { useLocation,} from 'react-router-dom';
import './index_menu.scss';
const {Sider } = Layout;

function MenuNavigation() {
  const selectedKey = useLocation().pathname

  const highlight = () => {
    switch (selectedKey) {
      case '/':
          return ['1']
      case '/danh-sach-nhan-vien':
          return ['2']
      default:
          return ['1']
  }
  }

  return ( 
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
        <Menu className='ant-menu' theme="dark" mode="inline" selectedKeys={highlight} defaultSelectedKeys={["2"]} items={items_admin} />
      </Sider>
   );
}

export default MenuNavigation;