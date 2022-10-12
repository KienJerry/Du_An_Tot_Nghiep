import {
  SettingOutlined,
  UserSwitchOutlined,
  AreaChartOutlined,
  FundProjectionScreenOutlined,
  OrderedListOutlined
} from '@ant-design/icons';
import {
  Link,
} from "react-router-dom";

function getItem(label, key, icon, children , checkPath) {
  return {
    key,
    icon,
    children,
    label,
    checkPath,
  };
}

export const items_admin = [
  getItem(<Link style={{textDecoration: "none" }} to={"/"}>Thống Kê</Link>, '1', <AreaChartOutlined /> , "" , ),
  getItem('Nhân Viên', 'sub0', <UserSwitchOutlined />, [
    getItem(<Link style={{textDecoration: "none"}} to={"/danh-sach-nhan-vien"}>Danh Sách Nhân Viên</Link>, '2'),
    getItem('Đăng Ký Mới', '3'),
  ]),
  getItem('Dự Án', 'sub1', <FundProjectionScreenOutlined />, [
    getItem('Danh Sách Dự Án', '4'),
    getItem('Hoạt Động Dự Án', '5'),
  ]),
  getItem('Quản Lý', 'sub2', <OrderedListOutlined />, [
    getItem('Quản Lý Chấm Công', '6'), 
    getItem('Quản Lý Nhân Viên', '7'),
    getItem('Quản Lý Thời Gian', '8'),
    getItem('Quản Lý Cuộc Họp', '9'),
  ]),
  getItem('Cài Đặt', '10', <SettingOutlined />),

]