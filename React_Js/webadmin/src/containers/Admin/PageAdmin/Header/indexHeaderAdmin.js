import { Layout, Menu, Avatar, Image, Dropdown, message , Space  } from 'antd';
import { UserOutlined , DownOutlined  } from '@ant-design/icons';
import React from 'react';
const { Header } = Layout;

function IndexAdmin() {
    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
      };
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: 'Thông Tin Cá Nhân',
                    key: '1',
                    icon: <UserOutlined />,
                },
                {
                    label: 'Đổi Mật Khẩu',
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
    return (
        <Header
            style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                paddingLeft: 200,
            }}
        >
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['0']}
                items={new Array(3).fill(null).map((_, index) => ({
                    key: String(index + 1),
                    label: `nav ${index + 1}`,
                }))}
            ></Menu>
            <div style={{
                position: "fixed",
                right: 50,
                top: 0,
            }}>
                <Avatar
                    src={
                        <Image
                            src="https://joeschmoe.io/api/v1/random"
                            style={{
                                width: "100%",
                                color: '#f56a00',
                                backgroundColor: '#fde3cf',
                            }}
                        />
                    }
                />
            <Dropdown overlay={menu}>
                <a onClick={e => e.preventDefault()} style={{marginLeft:'10px'}}>
                    <Space>
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
            </div>
        </Header>
    );
}

export default IndexAdmin;