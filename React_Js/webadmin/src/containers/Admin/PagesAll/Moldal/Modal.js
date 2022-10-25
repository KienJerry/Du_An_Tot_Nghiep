import React, { useState } from "react";
import { useForm, } from "react-hook-form";
import '../Moldal/Modal.css'
import { post } from '../post'
import axios from "axios";

// Thêm
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

        axios.post('http://' + post + '/addmission', data)
            .then(response => {

                if (response.data = 'ok') {
                    alert("thêm thành công");
                }
            });

    }

    return (
        <div className="body1">
            <button onClick={handleClickOpen}>Thêm Công Việc</button>
            <div>
                {
                    popup ?
                        <div className="formMain">
                            <div className="popup">
                                <div class="testbox">
                                    <div className="boderpopup">
                                        <form action="/" onSubmit={handleSubmit(onSubmit)}>
                                            <div>
                                                <div>
                                                    <h1>Tạo Dự Án & Phân Công</h1>
                                                </div>
                                                <div class="btn-block">
                                                    <button className="btn-close" style={{ background: "red", width: "20px", height: "20px", top: "8px", marginLeft: "326px" }} onClick={closePopup} href="/"> X </button>
                                                </div>
                                            </div>

                                            {/* Tên Công Việc */}
                                            <div className="wrapTextFrmAdd">
                                                <div className='textFrmAdd'>
                                                    <h4>Tên Dự Án</h4>
                                                </div>
                                                {/* <input type="text" name="name" /> */}

                                                <input className='inputFrmAdd' placeholder='Nhập Công Việc' {...register("tencongviec")} />

                                            </div>
                                            {/* Chọn Nhân Viên */}
                                            <div className="wrapTextFrmAdd">

                                                <div className='textFrmAdd2'>
                                                    <h4>Chọn Nhân Viên </h4>
                                                </div>
                                                <select  {...register("nhanvien")} >
                                                    <option class="disabled" value="location" disabled selected>*Please Select*</option>
                                                    <option  >Văn</option>
                                                    <option  >t Anh</option>
                                                    <option  >hướng</option>
                                                    <option  >Linh</option>
                                                    <option  >tuấn</option>
                                                </select>
                                            </div>
                                            {/* Vai Trò */}
                                            <div className="wrapTextFrmAdd">
                                                <div className='textFrmAdd3'>
                                                    <h4>Vai Trò</h4>
                                                </div>
                                                <input className='inputFrmAdd' placeholder='Nhập Vai Trò' {...register("vaitro")} />
                                            </div>
                                            {/* Hoạt ĐỘng*/}
                                            <div className="wrapTextFrmAdd">
                                                <div className='textFrmAdd4'>
                                                    <h4>Hoạt ĐỘng</h4>
                                                </div>
                                                <input className='inputFrmAdd' placeholder='Nhập Hoạt Động' {...register("hoatdong")} />
                                            </div>
                                            {/* Thời Gian Hoàn Thành */}
                                            <div className="wrapTextFrmAdd">
                                                <div className='textFrmAdd5'>
                                                    <h4>Thời Gian</h4>
                                                </div>
                                                <div class="time-visited">
                                                    <input type="time" name="timevisited" required {...register("thoigianhoanthanh")} />
                                                    <i class="fas fa-clock"></i>
                                                </div>
                                            </div>
                                            {/* Ghi Chú */}
                                            <h4>Note</h4>
                                            <textarea rows="5" {...register("ghichu")} ></textarea>
                                            <div className='frmBtnThem'>
                                                <input className='inputFrmAdd' type="submit" />

                                            </div>


                                        </form>
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