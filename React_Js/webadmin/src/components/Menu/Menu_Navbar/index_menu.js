import { Menu } from 'antd';
import { UserOutlined   } from '@ant-design/icons';
import {
    Link,
  } from "react-router-dom";

const handleMenuClick = (e) => {
    const key = e.key;
    {key === "3" && alert("Đăng xuất")}
};

export const menu = (
    <Menu
        onClick={handleMenuClick}
        items={[
            {
                label: <Link style={{textDecoration: "none" }} to={"/thong-tin-ca-nhan"}>Thông Tin Cá Nhân</Link>,
                key: '1',
                icon: <UserOutlined />,
            },
            {
                label: <Link style={{textDecoration: "none" }} to={"/doi-mat-khau"}>Đổi mật khẩu</Link>,
                key: '2',
                icon: <UserOutlined />,
            },
            {
                label: 'Đăng Xuất',
                key: '3',
                icon: <UserOutlined />,
            },
        ]}
    />
);