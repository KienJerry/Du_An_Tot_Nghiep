import { Breadcrumb, Row, Col, Button, Form, Input, DatePicker, Select, Upload, Modal } from 'antd';
import ImgCrop from 'antd-img-crop';
import './style_update_profile.scss';
import { initAccountMe, updateProfileAvatar, getProfileAvatar } from '../../../../Reducer/InitReducer/Auth/getAccountMe';
import { getAccountMe, setProductAccountAvatar, getAccountAvatar } from '../../../../Reducer/Reducers/Auth/getAccountMe';
import fetchProducts from '../../../../Reducer/Fetch_API/getAccount';
import { getAvatarAccount } from '../../../../Reducer/Fetch_API/getAccount';
import { setAvatarAccount } from '../../../../Reducer/Fetch_API/setImgAvatar';
import { Validate_Name, Validate_Phone, Validate_Gender, Validate_Address, Validate_Date } from '../../../../components/Validate/CheckValidate';
import React, { useReducer, useEffect, useState } from 'react';
import {disabledDate} from '../../../../components/DateTime/DateTime'
import { getBase64, beforeUpload } from '../../../../components/Base/Base64';
import { API_SET_DEL_AVATAR_ACCOUNT, API_GET_URL_IMAGE } from '../../../../api/index';
import moment from 'moment';
const { Option } = Select;

export default function UpdateProfile() {
    const [state, dispatch] = useReducer(getAccountMe, initAccountMe);
    const [stateImg, dispatchImg] = useReducer(setProductAccountAvatar, updateProfileAvatar);
    const [getStateImg, getDispatchImg] = useReducer(getAccountAvatar, getProfileAvatar);
    const [openModal, setOpenModal] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const account = state.account;
    const imageavt = getStateImg.account;
    useEffect(() => {
        fetchProducts(dispatch)
        getAvatarAccount(getDispatchImg)
    }, [stateImg]);

    const onFinish = (values) => {
        if (fileList == "") {
            const formData = new FormData();
            const formBirth = values.date._d.toLocaleDateString();
            formData.append('file', values.avatarIMG);
            formData.append('diachi', values.address);
            formData.append('email', values.email);
            formData.append('gioitinh', values.gender);
            formData.append('ten', values.fullname);
            formData.append('date', formBirth);
            formData.append('sdt', values.phoneNumber);
            setAvatarAccount(dispatchImg, formData);
        } else {
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
        }
    };

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    //Xem tr?????c h??nh ???nh
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
                <Breadcrumb.Item>TH??NG TIN C?? NH??N</Breadcrumb.Item>
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
                                <Col lg={3} md={4} sm={24} xs={24}>
                                    <Form.Item
                                        label="T???i ???nh ?????i di???n"
                                    >
                                        <ImgCrop rotate>
                                            <Upload
                                                action={API_SET_DEL_AVATAR_ACCOUNT}
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
                                <Col lg={19} md={18} sm={24} xs={24}>
                                    {imageavt && imageavt.map((value, index) => {
                                        return (
                                            <>
                                                {value.url != "" &&
                                                    <Form.Item
                                                        label="Hi???n th??? ???nh ?????i di???n"
                                                        name='avatarIMG'
                                                        initialValue={value.url}
                                                    >
                                                        <img key={index} style={{ width: '105px', height: '105px' }} src={API_GET_URL_IMAGE + value.url}></img>
                                                    </Form.Item>
                                                }
                                            </>
                                        );
                                    })}
                                </Col>
                            </Row>
                            <Row className='form-col'>
                                <Col lg={11} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        label="H??? & t??n"
                                        name="fullname"
                                        initialValue={value.ten}
                                        rules={Validate_Name}
                                    >
                                        <Input placeholder="Nh???p H??? V?? T??n C???a B???n" />
                                    </Form.Item>
                                </Col>
                                <Col lg={11} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        initialValue={value.email}
                                    >
                                        <Input placeholder="Nh???p Email C???a B???n" disabled />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row className='form-col'>
                                <Col lg={11} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        label="S??? ??i???n tho???i"
                                        name="phoneNumber"
                                        initialValue={value.sdt}
                                        rules={Validate_Phone}
                                    >
                                        <Input placeholder="Nh???p s??? ??i???n tho???i c???a b???n" />
                                    </Form.Item>
                                </Col>
                                <Col lg={11} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        className='input_gender'
                                        label="Gi???i t??nh"
                                        name="gender"
                                        initialValue={value.gioitinh}
                                        rules={Validate_Gender}
                                    >
                                        <Select placeholder="Ch???n gi???i t??nh">
                                            <Option value="0">Kh??c</Option>
                                            <Option value="1">Nam</Option>
                                            <Option value="2">N???</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row className='form-col'>
                                <Col lg={11} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        label="?????a ch???"
                                        name="address"
                                        initialValue={value.diachi}
                                        rules={Validate_Address}
                                    >
                                        <Input placeholder="T??? Xu??n - C?? Hu?? - EAKAR - DAKLAK " />
                                    </Form.Item>
                                </Col>
                                <Col lg={11} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        label="Ng??y sinh"
                                        name="date"
                                        initialValue={value.date === '0000-00-00' || value.date === '' || value.date === null || value.date === undefined ? null : moment(new Date(value.date), 'DD/MM/YYYY')}
                                        // initialValue={value.date === '0000-00-00' || value.date === '' || value.date === null || value.date === undefined ? null : moment(new Date(value.date), 'DD/MM/YYYY')}
                                        rules={Validate_Date}
                                    >
                                        <DatePicker placeholder="01/01/1996" format={'DD/MM/YYYY'} disabledDate={disabledDate} />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row className='form-col'>
                                <Col lg={23} md={24} sm={24} xs={24}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="btn btn-success">
                                            L??u
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