import './index.scss';
import { Button, Form, Input, Checkbox } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Validate_Email, Validate_Password, } from '../../../../components/Validate/CheckValidate';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { API_LOGIN } from '../../../../api/index';
import { DATE, TIME } from '../../../../components/DateTime/DateTime';
import { SuccessRegister } from '../../../../components/Message/Success';
import { ErrorLogin } from '../../../../components/Message/Error';
import { WarningRegister ,WarningCaptcha } from '../../../../components/Message/Warning';

function LoginRight() {

    const onsubmitSuccess = (values) => {
        if (values.captcha === undefined || values.captcha === null || values.captcha ==="") {
            WarningCaptcha();
             return false;
        }
        axios.post(API_LOGIN, {
            email: values.email,
            password: values.password,
        })
            .then(response => {
                if (response.data.success === true) {
                    SuccessRegister()
                } else {
                    ErrorLogin()
                }
            })
            .catch(error =>{
                WarningRegister()
            });
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
                name="captcha"
                valuePropName="checked"
            >
                <ReCAPTCHA className="ReCAPTCHA"
                    sitekey="6LdmoUEhAAAAACqtptaVuYqUJ-mV7_vDEk-VKMIP"
                />
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