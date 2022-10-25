import {
  SettingOutlined,
  UserSwitchOutlined,
  AreaChartOutlined,
  FundProjectionScreenOutlined,
  OrderedListOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
export const items_admin = [
  getItem('Thống Kê', '1', <AreaChartOutlined /> ),
  getItem('Nhân Viên', 'sub0', <UserSwitchOutlined />, [
    getItem('Danh Sách Nhân Viên', '2'),
    getItem('Đăng Ký Mới', '3'),
  ]),
  getItem('Dự Án', 'sub1', <FundProjectionScreenOutlined />, [
    getItem(<Link to={"/danh-sach-du-an"}>Danh Sách Dự Án</Link>,'4'),
    getItem(<Link to={"/danh-sach-hoat-dong-du-an"}>Hoạt Động Dự Án</Link>, '5'),
  ]),
  getItem('Quản Lý', 'sub2', <OrderedListOutlined />, [
    getItem('Quản Lý Chấm Công', '6'), 
    getItem('Quản Lý Nhân Viên', '7'),
    getItem('Quản Lý Thời Gian', '8'),
    getItem('Quản Lý Cuộc Họp', '9'),
  ]),
  getItem('Cài Đặt', '10', <SettingOutlined />),
];