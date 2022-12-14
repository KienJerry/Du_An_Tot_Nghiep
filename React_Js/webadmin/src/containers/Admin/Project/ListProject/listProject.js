import { Tabs } from 'antd';
import './listProject.scss';
import AddProJect from './AddProjectNew/AddProject';
import React from 'react';
import TabAll from '../TabAll/index';
import TabClose from '../TabClose/index';
import TabOpen from '../TabOpen/index';
import TabWaitting from '../TabWaitting/index';


const initialItems = [
  {
    label: 'Đang mở',
    children: TabOpen(),
    key: '1',
  },
  {
    label: 'Đang chờ',
    children: TabWaitting(),
    key: '2',
  },
  {
    label: 'Đã đóng',
    children: TabClose(),
    key: '3',
  },
  {
    label: 'Tất cả',
    children: TabAll(),
    key: '4',
    closable: false,
  },
];
const listProj = () => (
  <div className="card-container">
    <Tabs type="card" items={initialItems} tabBarExtraContent={AddProJect()} />
  </div>
);
export default listProj;