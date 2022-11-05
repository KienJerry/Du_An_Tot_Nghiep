import { Tabs } from 'antd';
import './listProject.scss';
import AddProJect from './AddProjectNew/AddProject';
import React from 'react';


const initialItems = [
  {
    label: 'Đang mở',
    children:
      (
        <>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
        </>
      ),
    key: '1',
  },
  {
    label: 'Đã đóng',
    children:
      (
        <>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </>
      ),
    key: '2',
  },
  {
    label: 'Tất cả',
    children:
      (
        <>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </>
      ),
    key: '3',
    closable: false,
  },
];
const App = () => (
  <div className="card-container">
    <Tabs type="card" items={initialItems} tabBarExtraContent={AddProJect()} />
  </div>
);
export default App;