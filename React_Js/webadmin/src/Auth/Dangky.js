import React from 'react';
import '../css/loginform.css'
import Img from "../imgForm/logo.png"
 
import { useForm, } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { post } from '../components/post'


 
function Dangky() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const navigate = useNavigate();
 

    const handleLogin = data => {
        console.log(data);
 
        axios.post('http://' + post + '/dangky', data)
          .then(response => {
    
            if (response.data = 'ok') {
              alert("thêm thành công");
            }
          });
    
      }



    
    // function dangky() {
                                       
    // }         navigate("/"); 
       
    return (
        <div className="App">
    
     <form onSubmit={handleSubmit(handleLogin)}>
        <div className='form-inner'>
            <div className="logo-k">
                <img src={Img} alt="Pessoas olhando gráficos" className="logo" />
            </div>
            <h2>Register</h2>
            {/* ERROR! */}
            <div className="form-p">
                <div className="form-group">
                    <label htmlFor="fullname" >Fullname:</label>
                    <input type="text" name="fullname" id="fullname" {...register("ten")}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name"   >Email:</label>
                    <input type="email" name="name" id="name"  {...register("email")}/>
                </div>
            </div>
            <div className="form-p">
                <div className="form-group">
                    <label htmlFor="password" >Password:</label>
                    <input type="password" name="password" id="password"  {...register("pass")} />
                </div>
            <div className="form-group">
                    <label htmlFor="password">Password Again:</label>
                    <input type="password" name="passwordagain" id="passwordagain"/>
            </div>
            </div>
            <div className="form-p">
                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select name="gender">
                        <option value="-Value-">-Value-</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="birthdate">Birth Date:</label>
                    <input type="date" name="birthdate" id="birthdate"/>
                </div>
            </div>
            <div className="form-p">
                <div className="form-group">
                    <label htmlFor="numberphone">Number Phone:</label>
                    <input type="text" name="numberphone" id="numberphone"/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" name="address" id="address"/>
                </div>
            </div>
            
            <input type="submit" value="REGISTER"/>

            
            <h5>You have accout?? <Link to="/">LOGIN NOW</Link></h5>
        </div>
    </form>


 
            
        </div>

    );
}

export default Dangky;
