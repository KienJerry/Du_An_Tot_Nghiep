import "../css/login.css"
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import Img from "../Assets/logo.png"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const api = "http://localhost:3001"
function Login({logado=false}) {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    Axios.post(api + '/dangnhap', {
      username : e.email,
      password : e.password
    }).then((response) => {

      const page = response.data;
        console.log(page);
      if (page.success === true) {
        localStorage.setItem('@user', JSON.stringify(response.config.data));
        window.location.reload();
        navigate("/header");
        return;
      } else {
        alert("Tài khoản or pass không chính xác");
        return;
      }

    }).catch(function(error){
      alert('lỗi không có kết nối')
    });
 
  };

   function chuyenTrang() {
    alert('TB TB TB');
    navigate("/header");
  }

  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email không hợp lệ")
      .required("chưa nhập email"),
    password: yup
      .string()
      .min(8, "Mật khẩu phải dài ít nhất 8 ký tự ")
      .required("chưa nhập mật khẩu"),
  });


  return (
    <div className="body">
        <div className="boderForm">
      
      
      <div className="wrapLogo">
        <div className="wrapLogo-L">
        <img src={Img} alt="Pessoas olhando gráficos" className="Logo" />
        </div>
        <div className="wrapLogo-R">
        <text>sờ lô gần A B C XY Z</text>
        </div>
      </div>
<div className="textLogin">
<h1>Đăng Nhập</h1>
</div>
      <div className="right-login">
        
          <Formik
            initialValues={{}}
            onSubmit={handleLogin}
            validationSchema={validationsLogin}
          >
            <Form className="login-form">
              <div className="form-group">
                <div>
                <label form="email">Email Đăng Nhập</label>
                </div>
                <div>
                <Field name="email" type='email' className="form-field" placeholder="Email" />
                </div>
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>

              {/*Outro campo*/}

              <div className="form-group">
                <div>
                <label form="email">Nhập Mật Khẩu</label>
                </div>
                <div>
                <Field name="password" type='password' className="form-field" placeholder="password" />
                </div>
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              <button className="button"   type="submit">
                LOG IN
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      </div>
   
  );
}

export default Login;