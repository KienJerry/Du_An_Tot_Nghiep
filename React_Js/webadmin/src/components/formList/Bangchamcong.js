import '../formList/formList.css';
import Modal from '../Moldal/Modal';
import React, { useState, useEffect } from 'react';
import { post } from '../post'
import axios from "axios";
import btnAdd from'../formList/imgFormList/add1.png'
function Bangchamcong() {
   // khởi tạo list rỗng đẩy dữ liệu 
  // let { id } = useParams();
  const [listcate, setLiscate] = useState([]);
  useEffect(() => {
    getDuAn();
  }, []);
  // console.log(dataPost)
  // data Sản phẩm
  const getDuAn= async () => {
    const baseurl = 'http://' + post + '/viewduan';
    const response = await axios.get(baseurl);
    setLiscate(response.data);
    // console.log(response.data);
  }
  function testbtn(){

            
    alert('Click Login')

   

};
 
    return (
      <div className='body' >
        <div className='bodyTT'>
        <div className='bodyTTl'> 
           <h1>Bảng chấm công của tôi</h1>
          <text>tên/mail</text>
          </div>
          <div className='bodyTTr'>
         <Modal/>
 
           
        </div>
        </div>
      
        <div className='headerbang'>


          <div className='BccTime'>
            <div className='BccTimeL'>
              <text> Ngày Hiện Tại</text>
            </div>
            <div className='BccTimeR'>
              <text> Ngày/Tháng/Năm</text>
            </div>

          </div>

          {/* chỉnh Form table  */}
          <div>
            <ul className='frmSpTD'>
            
                <div className='frmBoderColumDA'  >
                  <p>Dự Án</p>
                </div>
           
              <li>
                <div className='frmBoderColum'  >
                  <p>Thứ 2</p>
                </div>
              </li>
              <li>
                <div className='frmBoderColum' >
                  <p>Thứ 3</p>
                </div>
              </li>
              <li>
                <div className='frmBoderColum' >
                  <p>Thứ 4</p>
                </div>
              </li>
              <li>
                <div className='frmBoderColum' >
                  <p>Thứ 5 </p>
                </div>
              </li>
              <li>
                <div className='frmBoderColum' >
                  <p>Thứ 6</p>
                </div>
              </li>
              <li>
                <div className='frmBoderColum'  >
                  <p>Thứ 7</p>
                </div>
              </li>
              <li>
                <div className='frmBoderColum'   >
                  <p>Chủ Nhật</p>
                </div>
              </li>
              <li>
                <div className='frmBoderColum'   >
                  <p>Tổng Cộng</p>
                </div>
              </li>
            </ul>
          </div>
        {/* Hiển Thị Dữ Liệu Dự Án */}
          <div>
          {listcate.filter((Listcate) =>
                Listcate.tenduan.toLowerCase() 
              ).map((item) =>
            <ul className='frmSpTD'>
            
                <div className='frmBoderColumDA'  >
                <p key={item.idduan} value={item.idduan}>{item.tenduan}  </p>
                </div>
           
              <li>
                <div className='frmBoderColum'  >
                  <button onClick={testbtn}>
                <img  src={btnAdd}/>
                </button>
                </div>
              </li>
              <li>
                <div className='frmBoderColum' >
                <button onClick={testbtn}>
                <img  src={btnAdd}/>
                </button>
                </div>
              </li>
              <li>
                <div className='frmBoderColum' >
                <button onClick={testbtn}>
                <img  src={btnAdd}/>
                </button>
                </div>
              </li>
              <li>
                <div className='frmBoderColum' >
                <button onClick={testbtn}>
                <img  src={btnAdd}/>
                </button>
                </div>
              </li>
              <li>
                <div className='frmBoderColum' >
                <button onClick={testbtn}>
                <img  src={btnAdd}/>
                </button>
                </div>
              </li>
              <li>
                <div className='frmBoderColum'  >
                <button onClick={testbtn}>
                <img  src={btnAdd}/>
                </button>
                </div>
              </li>
              <li>
                <div className='frmBoderColum'   >
                <button onClick={testbtn}>
                <img  src={btnAdd}/>
                </button>
                </div>
              </li>
              <li>
                <div className='frmBoderColum'   >
              
                </div>
              </li>
            </ul>
              )}
          </div>
          
        </div>
        <div>
        </div>
      </div>
    )
  }
  export default Bangchamcong