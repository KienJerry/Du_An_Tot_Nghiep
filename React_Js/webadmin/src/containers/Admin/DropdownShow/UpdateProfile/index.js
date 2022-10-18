import { Breadcrumb, Row, Col, Button, Form, Input, DatePicker, Select, Upload, Modal } from 'antd';
import ImgCrop from 'antd-img-crop';
import './style_update_profile.scss';
import { initAccountMe, updateProfileAvatar } from '../../../../Reducer/InitReducer/Auth/getAccountMe';
import { getAccountMe, setProductAccountAvatar } from '../../../../Reducer/Reducers/Auth/getAccountMe';
import fetchProducts from '../../../../Reducer/Fetch_API/getAccount';
import { setAvatarAccount } from '../../../../Reducer/Fetch_API/setImgAvatar';
import { Validate_Name, Validate_Phone, Validate_Gender, Validate_Address, Validate_Date } from '../../../../components/Validate/CheckValidate';
import React, { useReducer, useEffect, useState } from 'react';
import { getBase64, beforeUpload } from '../../../../components/Base/Base64';
import { API_SET_DEL_AVATAR_ACCOUNT } from '../../../../api/index';
import moment from 'moment';
const { Option } = Select;

export default function UpdateProfile() {
    const [state, dispatch] = useReducer(getAccountMe, initAccountMe);
    const [stateImg, dispatchImg] = useReducer(setProductAccountAvatar, updateProfileAvatar);
    const [openModal, setOpenModal] = useState(false);
    const [fileList, setFileList] = useState([
        // {
        //     name: 'image.png',
        //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // },
    ]);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const account = state.account;
    useEffect(() => {
        fetchProducts(dispatch)
    }, []);

    const onFinish = (values) => {
        const file = fileList[0].originFileObj || fileList[0]
        const formData = new FormData();
        const formBirth = values.date._d.toLocaleDateString();
        formData.append('file', file);
        formData.append('diachi', values.address);
        formData.append('email', values.email);
        formData.append('gioitinh', values.gender);
        formData.append('ten', values.fullname);
        formData.append('date', formBirth);
        formData.append('sdt', values.phoneNumber);
        setAvatarAccount(dispatchImg, formData);
        fetchProducts(dispatch);
    };

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    //Xem trước hình ảnh
    const onPreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setOpenModal(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    return (
        <div >
            <Breadcrumb className='label-breadcrumb'>
                <Breadcrumb.Item>THÔNG TIN CÁ NHÂN</Breadcrumb.Item>
            </Breadcrumb>
            <div className='content-updateprofile'>
                {account && account.map((value, index) => {
                    return (
                        <Form
                            name="basic"
                            key={index}
                            initialValues={{
                                remember: true,
                            }}
                            layout="vertical"
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Row className='form-col'>
                                <Col lg={23} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        label="Ảnh đại diện"
                                    >
                                        <ImgCrop rotate>
                                            <Upload
                                                // action={API_SET_DEL_AVATAR_ACCOUNT}
                                                listType="picture-card"
                                                fileList={fileList}
                                                onPreview={onPreview}
                                                beforeUpload={beforeUpload}
                                                onChange={onChange}
                                            >
                                                {fileList.length < 1 && '+ Upload'}
                                            </Upload>
                                        </ImgCrop>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row className='form-col'>
                                <Col lg={11} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        label="Họ & tên"
                                        name="fullname"
                                        initialValue={value.ten}
                                        rules={Validate_Name}
                                    >
                                        <Input placeholder="Nhập Họ Và Tên Của Bạn" />
                                    </Form.Item>
                                </Col>
                                <Col lg={11} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        initialValue={value.email}
                                    >
                                        <Input placeholder="Nhập Email Của Bạn" disabled />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row className='form-col'>
                                <Col lg={11} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        label="Số điện thoại"
                                        name="phoneNumber"
                                        initialValue={value.sdt}
                                        rules={Validate_Phone}
                                    >
                                        <Input placeholder="Nhập số điện thoại của bạn" />
                                    </Form.Item>
                                </Col>
                                <Col lg={11} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        className='input_gender'
                                        label="Giới tính"
                                        name="gender"
                                        initialValue={value.gioitinh}
                                        rules={Validate_Gender}
                                    >
                                        <Select placeholder="Chọn giới tính">
                                            <Option value="0">Khác</Option>
                                            <Option value="1">Nam</Option>
                                            <Option value="2">Nữ</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row className='form-col'>
                                <Col lg={11} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        label="Địa chỉ"
                                        name="address"
                                        initialValue={value.diachi}
                                        rules={Validate_Address}
                                    >
                                        <Input placeholder="Tứ Xuân - Cư Huê - EAKAR - DAKLAK " />
                                    </Form.Item>
                                </Col>
                                <Col lg={11} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        label="Ngày sinh"
                                        name="date"
                                        initialValue={value.date === '0000-00-00' || value.date === '' || value.date === null || value.date === undefined ? null : moment(new Date(value.date), 'DD/MM/YYYY')}
                                        rules={Validate_Date}
                                    >
                                        <DatePicker placeholder="01/01/1996" format={'DD/MM/YYYY'} />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row className='form-col'>
                                <Col lg={23} md={24} sm={24} xs={24}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="btn btn-success">
                                            Lưu
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    )
                })}
            </div>
            <Modal open={openModal} title={previewTitle} footer={null} onCancel={() => setOpenModal(false)}>
                <img
                    alt="avatar"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>
        </div>
    );
}