import React, { useReducer, useEffect, useState } from "react";
import { SendOutlined, MoreOutlined, } from "@ant-design/icons";
import { suffix, itemRender } from '../../../../components/Pagination/pagination';
import { List } from '../../../../Reducer/InitReducer/Staff/ListStaff';
import { getListStaffs } from '../../../../Reducer/Reducers/Staff/listStaff';
import { getStaff } from '../../../../Reducer/Fetch_API/getlistStaff';
import { Image, Empty, Breadcrumb, Pagination, Input, Space } from 'antd';
import { API_GET_URL_IMAGE } from '../../../../api/index';
import './list_account.scss';

const { Search } = Input;
function App() {
  const [state, dispatch] = useReducer(getListStaffs, List);
  const [pag, setPag] = useState({
    show: [],
    all: [],
    total: 0,
  });
  useEffect(() => {
    getStaff(dispatch);
  }, [])
  useEffect(() => {
    { state.all && setPag(state) }
  }, [state])

  const onSearch = (value) => console.log(value);

  const pagenumberPagination = (page, pageSize) => {
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    state.all && setPag({ show: pag.all.slice(start, end), all: state.all, total: state.total });
  }

  return (
    <>
      <Breadcrumb className='label-breadcrumb'>
        <Breadcrumb.Item>DANH SÁCH NHÂN VIÊN</Breadcrumb.Item>
      </Breadcrumb>
      <div className="div-right">
        <div className="type-input">
          <Space direction="vertical">
            <Search
              placeholder="Tìm nhân viên..."
              onSearch={onSearch}
              suffix={suffix}
              style={{
                width: 200,
              }}
            />
          </Space>
        </div>
        <button type="button" class="btn btn-success"> <i class="bi bi-plus"></i>Thêm nhân viên</button>
        <button type="button" class="btn btn-warning" onClick={() => window.location.reload()}><i class="bi bi-arrow-clockwise"></i>Làm mới trang</button>
      </div>
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
          {pag.show && pag.show.map((value, index) => {
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
                      src={value.image != "" ? API_GET_URL_IMAGE + value.image : 'https://joeschmoe.io/api/v1/random'}
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
        {state.show == "" && <div className="noData"> <div className="datatr"><Empty description={
          <span>
            Không có dữ liệu
          </span>
        } /></div></div>}
        <div className="pagination-bg">
          <Pagination itemRender={itemRender}
            defaultCurrent={1}
            defaultPageSize={5}
            total={state.total}
            showSizeChanger={true}
            pageSizeOptions={[5, 10, 15, 20]}
            onChange={pagenumberPagination}
          />
        </div>
      </div>
    </>
  );
}

export default App;