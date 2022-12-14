import { Button, Form, Input, Select, Breadcrumb, Row, Col, DatePicker, Space, Upload, Switch } from 'antd';
import './FormAddProject.scss';
import * as type from '../../../../../components/Validate/CheckValidate';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState, useRef, useReducer, useEffect } from 'react';
import { FullStateManagament } from '../../../../../Reducer/InitReducer/Managament/indexManagament';
import { ActionTypeProject } from '../../../../../Reducer/InitReducer/InitProject/indexPrj';
import { List } from '../../../../../Reducer/InitReducer/Staff/ListStaff';
import * as Reducer from '../../../../../Reducer/Reducers/Managament/ProjectManagement';
import * as Reducers from '../../../../../Reducer/Reducers/Projects/useProject';
import * as Reducered from '../../../../../Reducer/Reducers/Staff/listStaff';
import * as typeAPI from '../../../../../Reducer/Fetch_API/ApiTypeProject';
import { getStaff } from '../../../../../Reducer/Fetch_API/getlistStaff';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const FormAddProject = () => {
    const [form] = Form.useForm();
    const [stateItem, dispatchitem] = useReducer(Reducer.setAddTypeProjectMana, FullStateManagament)
    const [stateAddItem, dispatchAdditem] = useReducer(Reducer.setAddTypeProjectMana, FullStateManagament)
    const [stateGr, dispatchGr] = useReducer(Reducer.setAddTypeProjectMana, FullStateManagament)
    const [stateLeader, dispatchLeader] = useReducer(Reducer.getListUserLeader, FullStateManagament)
    const [stateUpload, dispatchUpload] = useReducer(Reducer.getUploadIMG, FullStateManagament)
    const [stateAddPrj, dispatchAddPrj] = useReducer(Reducers.ActionPrj, ActionTypeProject)
    const [state, dispatch] = useReducer(Reducered.getListStaffs, List);
    const [avtatar, setAvatar] = useState()
    const [name, setName] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        typeAPI.getListTypeProject(dispatchitem)
        typeAPI.getListGrUser(dispatchGr)
        typeAPI.getListDataUserLeader(dispatchLeader)
        getStaff(dispatch);
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
        const img = stateUpload?.dataImg?.filename
        {
            values.StartProject === undefined || values.StartProject === true ?
                typeAPI.setAddFormPj({ values, dispatchAddPrj, img })
                :
                typeAPI.setAddFormPjs({ values, dispatchAddPrj, img })
        }
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
                <Breadcrumb.Item>T???O D??? ??N M???I</Breadcrumb.Item>
            </Breadcrumb>
            <div className='full-bg-form-add-project'>
                <Form layout="vertical" form={form} name="control-hooks" onFinish={onFinish}>
                    <Row className='form-col'>
                        <Col lg={11} md={24} sm={24} xs={24}>
                            <Form.Item
                                label="T??n D??? ??n"
                                name="nameProject"
                                rules={type.Validate_Name_Project}
                            >
                                <Input placeholder="Nh???p t??n d??? ??n c???a b???n" />
                            </Form.Item>
                        </Col>
                        <Col lg={11} md={24} sm={24} xs={24}>
                            <Form.Item
                                label="Lo???i D??? ??n"
                                name="projectType"
                                rules={type.Validate_required}
                            >
                                <Select
                                    placeholder="Ch???n lo???i d??? ??n"
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
                                                    placeholder="Th??m lo???i d??? ??n"
                                                    ref={inputRef}
                                                    value={name}
                                                    onChange={(event) => setName(event.target.value)}
                                                />
                                                <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                                    Th??m Items
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
                                label="T??n Nh??m (Ph??ng Ban)"
                                name="nameGroup"
                                rules={type.Validate_required}
                            >
                                <Select
                                    mode="multiple"
                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Ch???n ????? t??m ki???m nh??m"
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
                                label="Ng?????i Qu???n L?? D??? ??n"
                                name="Leader"
                                rules={type.Validate_required}
                            >
                                <Select
                                    showSearch
                                    placeholder="Ch???n ????? t??m ki???m"
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
                                label="D??? Ki???n Ng??y B???t ?????u & K???t Th??c"
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
                            <Form.Item
                                label="Th??m nh??n vi??n"
                                name="addnewuser"
                            >
                                <Select
                                    mode="multiple"
                                    allowClear
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Ch???n ????? t??m ki???m nh??n vi??n"
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    options={state?.all.map((item) => ({
                                        label: item.ten,
                                        value: item.id,
                                    }))}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row className='form-col' style={{ paddingTop: '20px' }}>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <Row className='form-coll'>
                                <Col span={11}>
                                    <Form.Item
                                        label="???nh ?????i Di???n D??? ??n"
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
                                        label="Kh???i Ch???y D??? ??n"
                                        name="StartProject"
                                    >
                                        <Switch defaultChecked />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='form-col' style={{ paddingTop: '20px' }}>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <Row className='form-coll'>
                                <Col span={23}>
                                    <Form.Item
                                        label="M?? T??? Lo???i D??? ??n"
                                        name="describeTypeProject"
                                        rules={type.Validate_required}
                                    >
                                        <TextArea rows={4} placeholder="Nh???p M?? T???" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='form-col' style={{ paddingTop: '20px' }}>
                        <Col lg={23} md={24} sm={24} xs={24}>
                            <Form.Item >
                                <button type="primary" htmlType="submit" className='custom-btn btn-12'>
                                    <span>L??U</span><span>L??M M???I</span>
                                </button>
                                <button htmlType="button" onClick={() => form.resetFields()} style={{ marginLeft: '40px' }} className='custom-btn btn-11'>
                                    <span>L??M M???I</span><span>L??U</span>
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