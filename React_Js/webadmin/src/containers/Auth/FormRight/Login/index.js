import './index.scss';
import { Button, Form, Input, Checkbox } from 'antd';
import React, { useState, useReducer } from 'react';
import 'antd/dist/antd.css';
import { Validate_Email, Validate_Password, } from '../../../../components/Validate/CheckValidate';
import { DATE, TIME, } from '../../../../components/DateTime/DateTime';
import ReCAPTCHA from "react-google-recaptcha";
import {WarningCaptcha } from '../../../../components/Message/Warning';
import { Link } from 'react-router-dom';
import ForgotPw from '../../ForgotPassword';
import {Login} from '../../../../Reducer/InitReducer/Auth/initNew';
import {success} from '../../../../Reducer/Reducers/Auth';
import {SetJobLogin} from '../../../../Reducer/Actions/Auth/index';

function LoginRight() {
    const [modalForgotPW, setModalForgotPW] = useState(false);
    const [state , dispatch] = useReducer(success , Login);

    //Hàm Submit
    const onsubmitSuccess = (values) => {
        if (values.captcha === undefined || values.captcha === null || values.captcha ==="") {
            WarningCaptcha();
             return false;
        }
        values.dateTime = TIME + "_" + DATE;
        dispatch(SetJobLogin(values))
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
                name="passWord"
                rules={Validate_Password}
            >
                <Input.Password placeholder="Nhập Mật Khẩu Của Bạn" />
            </Form.Item>

            <Form.Item
                name="checked"
                valuePropName="checked"
                className='check_flex'
            >
                <Checkbox className='check_flex_left' >
                    Lưu Tài Khoản
                </Checkbox>
                <Link onClick={() => setModalForgotPW(true)} className='check_flex_right'>Quên mật khẩu ?</Link>
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
            {modalForgotPW && <ForgotPw setOpenModal={setModalForgotPW} OpenModal={modalForgotPW}></ForgotPw>}
        </Form>
    );
}

export default LoginRight;