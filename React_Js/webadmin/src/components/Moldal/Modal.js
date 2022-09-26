import React, { useState } from "react";
import { useForm, } from "react-hook-form";
import '../Moldal/Modal.css'
import { post } from '../post'
import axios from "axios";
function Modal() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [popup, setPop] = useState(false)
    const handleClickOpen = () => {
        setPop(!popup)
    }
    const closePopup = () => {
        setPop(false)
    }


    const onSubmit = data => {
        console.log(data);
     
        axios.post('http://' + post + '/addDuan', data)
          .then(response => {
    
            if (response.data = 'ok') {
              alert("thêm thành công");
            }
          });
    
      }
    
    return (
        <div>
            <button onClick={handleClickOpen}>Open popup</button>
            <div>
                {
                    popup ?
                        <div className="main">
                            <div className="popup">
                                <div className="popup-header">
                                    <h1>Thêm công Việc</h1>
                                    <h1 onClick={closePopup}>X</h1>
                                </div>
                                <div>
                                    <text>Công Việc</text>


                                    <div className='tkR'>
                                        <input type="text" placeholder='Seach...' className='Nhập Công Việc' />


                                        {/*thêm*/}
                                        <div className='frmThemL'>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                {/* register your input into the hook by invoking the "register" function */}
                                                <div className='frmPI'>
                                                    <p className='textFrmAdd'>Tên Sản Phẩm </p>
                                                    <input   className='inputFrmAdd' placeholder='Nhập tên ốp' {...register("tenduan")} />
                                                </div>
                                             

        
                                                <div className='frmBtnThem'>
                                                    <input className='inputFrmAdd' type="submit" />

                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ""
                }
            </div>
        </div>
    )
}
export default Modal;