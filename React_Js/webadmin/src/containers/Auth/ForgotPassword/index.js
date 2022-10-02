import { Modal, Form, Input ,notification } from 'antd';
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Validate_Email, } from '../../../components/Validate/CheckValidate';
import { API_FORGOT_PW } from '../../../api/index';
import { WarningCaptcha,WarningRegister } from '../../../components/Message/Warning';
import { SuccessForgotPw } from '../../../components/Message/Success';
import { ErrorForgotPW } from '../../../components/Message/Error';
import axios from 'axios';
import { DATE,TIME } from '../../../components/DateTime/DateTime';


const ForgotPw = ({ setOpenModal, OpenModal, }) => {
  const [form] = Form.useForm();

  const onsubmitSuccess = (values) => {
    if (values.captcha === undefined || values.captcha === null || values.captcha === "") {
      WarningCaptcha();
      return false;
    }
    axios.post(API_FORGOT_PW, {
      email: values.email,
      dateTime: TIME + '_' + DATE,
  })
      .then(response => {
          if (response.data.success === true) {
            SuccessForgotPw();
          } else {
            ErrorForgotPW()
          }
      })
      .catch(error =>{
          WarningRegister()
      });
  };

  return (
    <>
      <Modal
        title="Đặt lại mật khẩu"
        visible={OpenModal}
        onOk={form.submit}
        onCancel={() => setOpenModal(false)}
      >
        <Form
          form={form}
          onFinish={onsubmitSuccess}>

          <p>Để lấy lại mật khẩu , bạn vui lòng cung cấp email</p>
          <Form.Item
            name="email"
            rules={Validate_Email}
          >
            <Input placeholder="Nhập Email Đăng Nhập Của Bạn" />
          </Form.Item>

          <Form.Item
            name="captcha"
            valuePropName="checked"
          >
            <ReCAPTCHA className="ReCAPTCHA"
              sitekey="6LdmoUEhAAAAACqtptaVuYqUJ-mV7_vDEk-VKMIP"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ForgotPw;