import './index.scss';
import { Button, Form, Input, Checkbox } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { Validate_Email, Validate_Password } from '../../../../components/Validate/CheckValidate';

function LoginRight() {

    const onsubmitSuccess = (values) => {
        console.log('Success:', values);
    };
    return (
        <Form
            className='label-form-bg'
            name="basic"
            layout="vertical"
            initialValues={{
                remember: true,
            }}
            onFinish={onsubmitSuccess}
            autoComplete="off"
        >
            <Form.Item
                label={<label className='label-form'>Email Đăng Nhập</label>}
                name="email"
                rules={Validate_Email}
            >
                <Input placeholder="Nhập Email Đăng Nhập Của Bạn" />
            </Form.Item>

            <Form.Item
                label={<label className='label-form'>Mật Khẩu</label>}
                name="password"
                rules={Validate_Password}
            >
                <Input.Password placeholder="Nhập Mật Khẩu Của Bạn" />
            </Form.Item>

            <Form.Item
                name="checked"
                valuePropName="checked"
            >
                <Checkbox >
                    Lưu Tài Khoản
                </Checkbox>
            </Form.Item>

            <Form.Item
            >
                <Button type="primary" htmlType="submit" className="login-form-button" >
                    ĐĂNG NHẬP
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginRight;