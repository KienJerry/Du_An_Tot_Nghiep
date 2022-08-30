import "../Styles/login.css"
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
    // Axios.post("http://192.168.1.6:3001/dangnhap", {
      
    // }
    
  
    // ).then((response) => {

    //   const page = response.data;
    //   console.log(page);
 
    //   if (page === true) {
    //     localStorage.setItem('@user', JSON.stringify(response.config.data));
    //     window.location.reload();
    //     navigate("/header");
        
    //   } else {
    //     alert(response.data.msg);
     
    //   }

    // });
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
      <div className="left-login">
        <img src={Img} alt="Pessoas olhando gráficos" className="chart" />

      </div>

      <div className="right-login">
        <div className="card-login">
          <div className="user-links">
            <div className="user-link-home">
              {!logado && <Link to="/">Home</Link>}
            </div>

          </div>
          <h1>LOGIN</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleLogin}
            validationSchema={validationsLogin}
          >
            <Form className="login-form">
              <div className="form-group">
                <label form="email">User</label>

                <Field name="email" type='email' className="form-field" placeholder="Email" />

                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>

              {/*Outro campo*/}

              <div className="form-group">
                <label form="email">Password</label>
                <Field name="password" type='password' className="form-field" placeholder="password" />

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