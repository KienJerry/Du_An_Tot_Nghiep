import { Button, Form, Input, Select, Breadcrumb, Row, Col, DatePicker, Space, Upload, Switch } from 'antd';
import './FormAddProject.scss';
import * as type from '../../../../../components/Validate/CheckValidate';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState, useRef, useReducer, useEffect } from 'react';
import { FullStateManagament } from '../../../../../Reducer/InitReducer/Managament/indexManagament';
import * as Reducer from '../../../../../Reducer/Reducers/Managament/ProjectManagement';
import * as typeAPI from '../../../../../Reducer/Fetch_API/ApiTypeProject';
const { RangePicker } = DatePicker;
const FormAddProject = () => {
    const [form] = Form.useForm();
    const [stateItem, dispatchitem] = useReducer(Reducer.setAddTypeProjectMana, FullStateManagament)
    const [stateAddItem, dispatchAdditem] = useReducer(Reducer.setAddTypeProjectMana, FullStateManagament)
    const [stateGr, dispatchGr] = useReducer(Reducer.setAddTypeProjectMana, FullStateManagament)
    const [stateLeader, dispatchLeader] = useReducer(Reducer.getListUserLeader, FullStateManagament)
    const [stateUpload, dispatchUpload] = useReducer(Reducer.getUploadIMG, FullStateManagament)
    const [avtatar, setAvatar] = useState()
    const [name, setName] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        typeAPI.getListTypeProject(dispatchitem)
        typeAPI.getListGrUser(dispatchGr)
        typeAPI.getListDataUserLeader(dispatchLeader)
    }, [stateAddItem]);
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avtatar?.preview)
        }
    }, [avtatar]);

    const addItem = (e) => {
        e.preventDefault();
        {
            name == '' || name == null ? <></> :
                typeAPI.setAddTypeProjectForm({ dispatchAdditem, name });
        }
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const onFinish = (values) => {
        console.log(values);
    };

    const handlePreviewImage = (e) => {
        const file = e.target.files[0]
        typeAPI.upload({ dispatchUpload, file })
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    return (
        <>
            <Breadcrumb className='label-breadcrumb'>
                <Breadcrumb.Item>TẠO DỰ ÁN MỚI</Breadcrumb.Item>
            </Breadcrumb>
            <div className='full-bg-form-add-project'>
                <Form layout="vertical" form={form} name="control-hooks" onFinish={onFinish}>
                    <Row className='form-col'>
                        <Col lg={11} md={24} sm={24} xs={24}>
                            <Form.Item
                                label="Tên Dự Án"
                                name="nameProject"
                                rules={type.Validate_Name_Project}
                            >
                                <Input placeholder="Nhập tên dự án của bạn" />
                            </Form.Item>
                        </Col>
                        <Col lg={11} md={24} sm={24} xs={24}>
                            <Form.Item
                                label="Loại Dự Án"
                                name="projectType"
                                rules={type.Validate_required}
                            >
                                <Select
                                    placeholder="Chọn loại dự án"
                                    allowClear
                                    showSearch
                                    options={stateItem.data.map((item) => ({
                                        label: item.tenduan,
                                        value: item.id,
                                    }))}
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    dropdownRender={(menu) => (
                                        <>
                                            {menu}
                                            <Space
                                                style={{
                                                    padding: '8px 0 8px 4px',
                                                }}
                                            >
                                                <Input
                                                    placeholder="Thêm loại dự án"
                                                    ref={inputRef}
                                                    value={name}
                                                    onChange={(event) => setName(event.target.value)}
                                                />
                                                <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                                    Thêm Items
                                                </Button>
                                            </Space>
                                        </>
                                    )}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className='form-col' style={{ paddingTop: '20px' }}>
                        <Col lg={11} md={24} sm={24} xs={24}>
                            <Form.Item
                                label="Tên Nhóm (Phòng Ban)"
                                name="nameGroup"
                                rules={type.Validate_required}
                            >
                                <Select
                                    mode="multiple"
                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Chọn để tìm kiếm nhóm"
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    options={stateGr.dataGr?.map((item) => ({
                                        label: item.tennhom,
                                        value: item.id,
                                    }))}
                                />
                            </Form.Item>
                        </Col>
                        <Col lg={11} md={24} sm={24} xs={24}>
                            <Form.Item
                                label="Người Quản Lý Dự Án"
                                name="Leader"
                                rules={type.Validate_required}
                            >
                                <Select
                                    showSearch
                                    placeholder="Chọn để tìm kiếm"
                                    optionFilterProp="children"
                                    allowClear
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={stateLeader.dataleader}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className='form-col' style={{ paddingTop: '20px' }}>
                        <Col lg={11} md={24} sm={24} xs={24}>
                            <Form.Item
                                label="Dự Kiến Ngày Bắt Đầu & Kết Thúc"
                                name="datedob"
                                rules={type.Validate_required}
                            >
                                <RangePicker style={{ width: '100%', }}
                                    dateRender={(current) => {
                                        return (
                                            <div className="ant-picker-cell-inner">
                                                {current.date()}
                                            </div>
                                        );
                                    }}
                                />
                            </Form.Item>
                        </Col>
                        <Col lg={11} md={24} sm={24} xs={24}>
                            <Row className='form-coll'>
                                <Col span={11}>
                                    <Form.Item
                                        label="Ảnh Đại Diện Dự Án"
                                        name="UpdateImg"
                                        rules={type.Validate_required}
                                    >
                                        <input accept=".jpg, .png" style={{ width: '100%', marginBottom: '10px' }} className="form-control" type="file" onChange={handlePreviewImage} ></input>
                                    </Form.Item>
                                    {/* {avtatar && (
                                        <img src={avtatar.preview} alt="Image" width="40%"></img>
                                    )} */}
                                </Col>
                                <Col span={11}>
                                    <Form.Item
                                        label="Khởi Chạy Dự Án"
                                        name="StartProject"
                                    >
                                        <Switch defaultChecked />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='form-col' style={{ paddingTop: '20px' }}>
                        <Col lg={23} md={24} sm={24} xs={24}>
                            <Form.Item >
                                <button type="primary" htmlType="submit" className='custom-btn btn-12'>
                                    <span>LƯU</span><span>LÀM MỚI</span>
                                </button>
                                <button htmlType="button" onClick={() => form.resetFields()} style={{ marginLeft: '40px' }} className='custom-btn btn-11'>
                                    <span>LÀM MỚI</span><span>LƯU</span>
                                </button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
};
export default FormAddProject;