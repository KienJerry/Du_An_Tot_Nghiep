import { Form, Input, Button, Checkbox, Typography, Layout, Tooltip ,message} from "antd";
import { LoginOutlined, GooglePlusOutlined, GithubOutlined } from "@ant-design/icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {  faFacebookF } from '@fortawesome/free-brands-svg-icons';
import ReCAPTCHA from "react-google-recaptcha";
import './index.scss';



const { Title } = Typography;
function Login() {
    return (
        <Layout className="fullbg">
      <Form className="form_login1"
        name="signin"
        // form={form}
        initialValues={{
          remember: false,
        }}
        // onFinish={onFinish}
        autoComplete="off"
      > 
        <div className="zzz">
          <Title level={2} className="text-center" style={{ color: '#284D66', fontWeight: "bold", }}>
            Sign in
          </Title>
          {/* <div className="social-container">
            <Tooltip
              title="Google+"
              placement="bottom"
              color="#db4a39"
              key="#db4a39"
            >
              <div className="social google" >
                <GooglePlusOutlined />
              </div>
            </Tooltip>

            <Tooltip
              title="Facebook"
              placement="bottom"
              color="#4267B2"
              key="#4267B2"
            >
              <div className="social facebook">
              <FontAwesomeIcon icon={faFacebookF} className="icon1" />
              </div>
            </Tooltip>

            <Tooltip
              title="Github"
              placement="bottom"
              color="#0e76a8"
              key="#0e76a8"
            >
              <div className="social linkedin">
                <GithubOutlined />
              </div>
            </Tooltip>
          </div> */}

          <div className="option-text">or use your account</div>

          <Form.Item
            name="email"
            hasFeedback
            label="Email address"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            // rules={check_mail}
          >
            <Input placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            hasFeedback
            label="Password"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            // rules={check_pass}
          >
            <Input.Password placeholder="Password" size="large" />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/#">
              Forgot password?
            </a>
          </Form.Item>

          <ReCAPTCHA className="ReCAPTCHA"
            sitekey="6LdmoUEhAAAAACqtptaVuYqUJ-mV7_vDEk-VKMIP"
            // onChange={Recaptcha}
          />

          <Button
            htmlType="submit"
            type="primary"
            icon={<LoginOutlined />}
            size="large"
            style={{ backgroundColor: '#1478E7' }}>
            Sign In
          </Button>
        </div>
      </Form>
    </Layout>
    );
}

export default Login;