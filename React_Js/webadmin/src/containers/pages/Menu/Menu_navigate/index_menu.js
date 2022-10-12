import { Layout, Menu } from 'antd';
import React, {useEffect, useReducer } from 'react';
import { items_admin } from '../../../../components/Menu/Menu_navigate/index_menu';
import {Success_mennu_nav } from '../../../../Reducer/Reducers/MenuNavigate';
import {Check_Menu_Nav } from '../../../../Reducer/InitReducer/MenuNavi/initMenu';
import {OnClickMenu } from '../../../../Reducer/Actions/MenuNavigate';
import { useNavigate } from "react-router-dom";
const {Sider } = Layout;

function MenuNavigation() {
  const [state, dispatch] = useReducer(Success_mennu_nav, Check_Menu_Nav);
  const navigate = useNavigate();
  useEffect(() => {
    navigate(state.job)
  }, [state])
  const clickMenuNavigate = (e) => {
    dispatch(OnClickMenu(e))
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={state.SelectedKeys} items={items_admin} onClick={e => clickMenuNavigate(e)} />
      </Sider>
   );
}

export default MenuNavigation;