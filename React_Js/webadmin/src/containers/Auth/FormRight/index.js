import './index.scss';
import { Link, useLocation } from "react-router-dom";
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Checkbox } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';

function LoginRight() {
    const location = useLocation();

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="Background-full-right">
            <div className='content-list'>
                <h2>Đăng Ký Tài Khoản Ứng Viên</h2>
                <p>Nhiều ứng viên tiềm năng đang làm việc tại Quốc Hưng</p>
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label={<label className='label-form'>Họ & Tên</label>}
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder="Nhập Họ Và Tên Của Bạn" />
                    </Form.Item>

                    <Form.Item
                        label={<label className='label-form'>Email Đăng Ký</label>}
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder="Nhập Email Đăng Ký Của Bạn" />
                    </Form.Item>

                    <Form.Item
                        label={<label className='label-form'>Số Điện Thoại</label>}
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder="Nhập Số Điện Thoại Của Bạn" />
                    </Form.Item>

                    <Form.Item
                        label={<label className='label-form'>Mật Khẩu</label>}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Nhập Mật Khẩu Của Bạn" />
                    </Form.Item>

                    <Form.Item
                        label={<label className='label-form'>Xác Nhận Mật Khẩu</label>}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Nhập Lại Mật Khẩu" />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox >
                            Tôi đồng ý với
                            <a className='label-form-chinh-sach'> Điều Khoản Dịch Vụ </a>
                            và
                            <a className='label-form-chinh-sach'> Chính Sách Bảo Mật </a>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item
                    >
                        <Button type="primary" htmlType="submit" className="login-form-button" disabled>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default LoginRight;