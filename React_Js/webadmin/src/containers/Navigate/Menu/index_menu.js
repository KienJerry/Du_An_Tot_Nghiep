import {
  SettingOutlined,
  UserSwitchOutlined,
  AreaChartOutlined,
  FundProjectionScreenOutlined,
  OrderedListOutlined
} from '@ant-design/icons';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
export const items_admin = [
  getItem('Thống Kê', '1', <AreaChartOutlined />),
  getItem('Nhân Viên', '2', <UserSwitchOutlined />, [
    getItem('Danh Sách Nhân Viên', '3'),
    getItem('Đăng Ký Mới', '4'),
  ]),
  getItem('Dự Án', 'sub1', <FundProjectionScreenOutlined />, [
    getItem('Danh Sách Dự Án', '5'),
    getItem('Hoạt Động Dự Án', '6'),
  ]),
  getItem('Quản Lý', 'sub2', <OrderedListOutlined />, [
    getItem('Quản Lý Chấm Công', '7'), 
    getItem('Quản Lý Nhân Viên', '8'),
    getItem('Quản Lý Thời Gian', '9'),
    getItem('Quản Lý Cuộc Họp', '10'),
  ]),
  getItem('Cài Đặt', '11', <SettingOutlined />),
];