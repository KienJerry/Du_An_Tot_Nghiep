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

function getItem(label, key, icon, children ) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const items_admin = [
  getItem(<Link style={{textDecoration: "none" }} to={"/"}>Thống Kê</Link>, '1', <AreaChartOutlined /> , "" , ),
  getItem('Nhân Viên', 'sub0', <UserSwitchOutlined />, [
    getItem(<Link style={{textDecoration: "none"}} to={"/danh-sach-nhan-vien"}>Danh Sách Nhân Viên</Link>, '2'),
    getItem(<Link style={{textDecoration: "none"}} to={"/dang-ky-moi"}>Đăng Ký Mới</Link>, '3'),
    getItem(<Link style={{textDecoration: "none"}} to={"/quan-ly-tai-khoan"}>Quản Lý Tài Khoản</Link>, '4'),
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

]

export const highlight = () => {
  const selectedKey = window.location.pathname;
  switch (selectedKey) {
    case '/':
        return ['1']
    case '/danh-sach-nhan-vien':
        return ['2']
    case '/dang-ky-moi':
        return ['3']
    case '/quan-ly-tai-khoan':
        return ['4']
    default:
        return ['1']
}
}