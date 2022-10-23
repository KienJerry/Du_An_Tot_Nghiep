import React, { useReducer, useEffect } from "react";
import { SendOutlined, MoreOutlined } from "@ant-design/icons";
import { List } from '../../../../Reducer/InitReducer/Staff/ListStaff';
import { getListStaffs } from '../../../../Reducer/Reducers/Staff/listStaff';
import { getStaff } from '../../../../Reducer/Fetch_API/getlistStaff';
import { Image, Empty, Breadcrumb } from 'antd';
import { API_GET_URL_IMAGE } from '../../../../api/index';
import './list_account.scss';

function App() {
  const [state, dispatch] = useReducer(getListStaffs, List);

  const ListAccount = state.data;
  const imgs = 'https://joeschmoe.io/api/v1/random';
  useEffect(() => {
    getStaff(dispatch);
  }, [])

  return (
    <>
      <Breadcrumb className='label-breadcrumb'>
        <Breadcrumb.Item>DANH SÁCH NHÂN VIÊN</Breadcrumb.Item>
      </Breadcrumb>
      <div className="table-responsive table-responsive-data2" >
        <table className="table table-data2">
          <thead>
            <tr>
              <th>
                <label className="au-checkbox">
                  <input type="checkbox" />
                  <span className="au-checkmark"></span>
                </label>
              </th>
              <th>Tên nhân viên</th>
              <th>Ảnh nhân viên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Năm sinh</th>
              <th>Giới tính</th>
              <th>Chức Vụ</th>
              <th></th>
            </tr>
          </thead>
          {ListAccount && ListAccount.map((value, index) => {
            return (
              <tbody key={index}>
                <tr className="tr-shadow">
                  <td>
                    <label className="au-checkbox">
                      <input type="checkbox" />
                      <span className="au-checkmark"></span>
                    </label>
                  </td>
                  <td>{value.ten}</td>
                  <td>
                    <Image
                      width={50}
                      src={value.image != "" ? API_GET_URL_IMAGE + value.image : imgs}
                    />
                  </td>
                  <td>
                    <span className="block-email">{value.email}</span>
                  </td>
                  <td className="desc">{value.sdt}</td>
                  <td>{value.date || <span style={{ color: 'red' }}>Chưa cập nhật</span>}</td>
                  <td>
                    <span className="status--process">{value.gioitinh && value.gioitinh === "1" ? <p style={{ color: 'blue' }}>Nam</p> : value.gioitinh === "2" ? <p style={{ color: '#fd00c6' }}>Nữ</p> : "Khác"}</span>
                  </td>
                  <td >Đang cập nhật</td>
                  <td>
                    <div className="table-data-feature">
                      <button className="item" data-toggle="tooltip" data-placement="top" title="Xem chi tiết">
                        <SendOutlined style={{ color: 'blue' }} />
                      </button>
                      <button className="item" data-toggle="tooltip" data-placement="top" title="Menu">
                        <MoreOutlined />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="spacer"></tr>
              </tbody>
            )
          })}
        </table>
        {ListAccount == "" && <div className="noData"> <div className="datatr"><Empty description={
          <span>
            Không có dữ liệu
          </span>
        } /></div></div>}
      </div>
    </>
  );
}

export default App;