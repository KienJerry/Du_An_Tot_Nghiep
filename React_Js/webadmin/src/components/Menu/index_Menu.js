import { Menu } from 'antd';
import { ApartmentOutlined, LockOutlined, UserSwitchOutlined, UnlockOutlined } from '@ant-design/icons';
import {BanAccUserStaff} from '../../Reducer/Fetch_API/getlistStaff'
const handleMenuClick = (e) => {
    if (e.key === "2"){
        BanAccUserStaff();
    }
};

export const menu = (
    <Menu
        onClick={handleMenuClick}
        items={[
            {
                label: 'Tài khoản',
                key: '1',
                icon: <UserSwitchOutlined />,
                children: [
                    {
                        key: '2',
                        label: 'Khoá tài khoản',
                        icon: <LockOutlined />,
                        danger: true,
                    },
                    {
                        key: '3',
                        label: 'Mở khoá tài khoản',
                        icon: <UnlockOutlined />,
                    },
                ],
            },
            {
                label: 'Phân quyền',
                key: '4',
                icon: <ApartmentOutlined />,
            },
        ]}
    />
);