import { Breadcrumb, Row , Col } from 'antd';
import './style_update_profile.scss';
import { initAccountMe } from '../../../../Reducer/InitReducer/Auth/getAccountMe';
import { getAccountMe } from '../../../../Reducer/Reducers/Auth/getAccountMe';
import fetchProducts from '../../../../Reducer/Fetch_API/getAccount';
import React, { useReducer, useState, useEffect } from 'react';

export default function UpdateProfile() {
    const [state, dispatch] = useReducer(getAccountMe, initAccountMe);
    console.log(state);
    useEffect(() => {
        fetchProducts(dispatch)
    }, []);
    return (
        <div >
            <Breadcrumb
                style={{
                    margin: '16px 0',
                    fontSize: '16px',
                }}
            >
                <Breadcrumb.Item>THÔNG TIN CÁ NHÂN</Breadcrumb.Item>
            </Breadcrumb>
            <div className='content-updateprofile'>
                Content
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
            </div>
        </div>
    );
}