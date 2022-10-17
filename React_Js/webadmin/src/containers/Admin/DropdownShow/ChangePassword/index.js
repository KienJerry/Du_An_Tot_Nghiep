import React, { useState, useEffect} from "react";
// import { useForm } from "react-hook-form";
import axios from "axios";
const api ='http://localhost:3001/';
function ChangePassword() {
    const [selectedFile, setSelectedFile] = useState();
    const submitEmployeeRecord = async (e) =>{ 
        const formData = new FormData(); 

        formData.append('file', selectedFile);
  
        console.log(selectedFile);
          axios.post(api +'getaccountme/edituploadfile',  formData )
          .then(res =>{
              if(res.data ==='ok'){
                alert("thêm thành công")
                console.log(res);
                return false;
            }
          })   
      }
    return (
        <div >
            <form onSubmit={submitEmployeeRecord}>
            <input type="file" name="file" className="form-control mb-4" onChange={(e) => setSelectedFile(e.target.files[0])}/>
            </form>
            <input className='button5' type="submit" value={"Thêm"} onClick={submitEmployeeRecord}></input>
        </div>
    );
}

export default ChangePassword;