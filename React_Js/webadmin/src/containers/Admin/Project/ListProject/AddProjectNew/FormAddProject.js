import { Button, Form, Input, Select, Breadcrumb, Row, Col } from 'antd';
import React from 'react';
import './FormAddProject.scss';
import * as type from '../../../../../components/Validate/CheckValidate'
const { Option } = Select;
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const App = () => {
    const [form] = Form.useForm();
    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({
                    note: 'Hi, man!',
                });
                return;
            case 'female':
                form.setFieldsValue({
                    note: 'Hi, lady!',
                });
                return;
            case 'other':
                form.setFieldsValue({
                    note: 'Hi there!',
                });
        }
    };
    const onFinish = (values) => {
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    const onFill = () => {
        form.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };
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
                                    onChange={onGenderChange}
                                    allowClear
                                >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="other">other</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        name="note"
                        label="Tên Dự Án"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={onGenderChange}
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                    >
                        {({ getFieldValue }) =>
                            getFieldValue('gender') === 'other' ? (
                                <Form.Item
                                    name="customizeGender"
                                    label="Customize Gender"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            ) : null
                        }
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                        <Button type="link" htmlType="button" onClick={onFill}>
                            Fill form
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};
export default App;