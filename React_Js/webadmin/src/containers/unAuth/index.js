import './unAuth.scss'
import img from '../../public/background/2.jpg';
import { useNavigate, Navigate } from "react-router-dom";

function UnAuth() {

    setTimeout(() => {
        window.location.reload();
      }, 1000)

    return (
        <div className="section">
            <div className="img-bg">
                <img src="https://niemvuilaptrinh.ams3.cdn.digitaloceanspaces.com/tao_trang_dang_nhap/hinh_anh_minh_hoa.jpg" alt="Hình Ảnh Minh Họa"></img>
            </div>
            <div className="noi-dung">
                <div className="form">
                    <h2>WEBSITE QUẢN LÝ NHÂN VIÊN CỦA QUỐC HƯNG </h2>
                    <a className="input-form" href='/dang-nhap'>
                        <input type="submit" value="Đăng Nhập" />
                    </a>
                    <a className="input-form1" href='/dang-ky'>
                        <input type="submit" value="Đăng Ký" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default UnAuth;