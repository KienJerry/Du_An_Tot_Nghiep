import React from 'react';
import '../css/loginform.css'
import Img from "../imgForm/logo.png"
import Axios from "axios";
import { useForm, } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const api = "http://localhost:3001"
function LoginForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const handleLogin = (e) => {
        Axios.post(api + '/dangnhap', {
            username: e.username,
            password: e.password
        }).then((response) => {
            const page = response.data;
            console.log(page);
            if (page.success === true) {
                localStorage.setItem('@user', JSON.stringify(response.config.data));
                window.location.reload();
                navigate("/bangchamcong");
                return;
            } else {
                alert("Tài khoản or pass không chính xác");
                return;
            }

        }).catch(function (error) {
            alert('lỗi không có kết nối')
        });

    };
    // function dangky() {
    //     navigate("/register");                           
    // }       
       
    return (
        <div className="App">
   <form  onSubmit={handleSubmit(handleLogin)}>
        <div className='form-inner'>
            <div className="logo-k">
                <img src={Img} alt="Pessoas olhando gráficos" className="logo" />
            </div>
            <h2>Login</h2>
            {/* ERROR! */}
            <div className="form-group">
                <label htmlFor="name">Email:</label>
                <input type="email" name="name" id="name"   {...register("username")} />
            </div>
            <div className="form-group">
                <label htmlFor="password"  >Password:</label>
                <input type="password" name="password" id="password" {...register("password")}/>
            </div>



            <h6><Link to="/">Forgot your password?</Link></h6>


            <input type="submit" value="LOGIN"/>
            <h5>You don't have accout??  <Link to="/register">REGISTER NOW</Link></h5>

            <h5 className="or">Or login for:</h5>
            <div className="social">
                <a href="/"><i className="fab fa-google goog"></i></a>
                <a href="/"><i className="fab fa-facebook-f faceb"></i></a>
            </div>
        </div>
    </form>
            
    
            
        </div>

    );
}

export default LoginForm;
