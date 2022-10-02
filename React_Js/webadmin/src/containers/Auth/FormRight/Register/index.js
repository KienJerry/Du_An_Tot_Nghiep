import './index.scss';
import { Button, Form, Input, Checkbox } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { Validate_Name, Validate_Email, Validate_Phone, Validate_Password, Validate_Re_Password, Validate_Checker } from '../../../../components/Validate/CheckValidate';

function LoginRight() {

    const onsubmitSuccess = (values) => {
        console.log('Success:', values);
    };
    return (
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onsubmitSuccess}
                    autoComplete="off"
                >
                    <Form.Item
                        label={<label className='label-form'>Họ & Tên</label>}
                        name="username"
                        rules={Validate_Name}
                    >
                        <Input placeholder="Nhập Họ Và Tên Của Bạn" />
                    </Form.Item>

                    <Form.Item
                        label={<label className='label-form'>Email Đăng Ký</label>}
                        name="email"
                        rules={Validate_Email}
                    >
                        <Input placeholder="Nhập Email Đăng Ký Của Bạn" />
                    </Form.Item>

                    <Form.Item
                        label={<label className='label-form'>Số Điện Thoại</label>}
                        name="phone"
                        rules={Validate_Phone}
                    >
                        <Input placeholder="Nhập Số Điện Thoại Của Bạn" />
                    </Form.Item>

                    <Form.Item
                        label={<label className='label-form'>Mật Khẩu</label>}
                        name="password"
                        rules={Validate_Password}
                    >
                        <Input.Password placeholder="Nhập Mật Khẩu Của Bạn" />
                    </Form.Item>

                    <Form.Item
                        label={<label className='label-form'>Xác Nhận Mật Khẩu</label>}
                        name="repass"
                        rules={Validate_Re_Password}
                    >
                        <Input.Password placeholder="Nhập Lại Mật Khẩu"/>
                    </Form.Item>

                    <Form.Item
                        name="checked"
                        valuePropName="checked"
                        rules={Validate_Checker}
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
                        <Button type="primary" htmlType="submit" className="login-form-button" >
                            ĐĂNG KÝ
                        </Button>
                    </Form.Item>
                </Form>
    );
}

export default LoginRight;