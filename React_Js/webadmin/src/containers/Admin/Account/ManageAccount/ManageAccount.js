import { Col, Row } from 'antd';
import ManageAccountBan from './ManageAccountBan/manageAccountBan'
import StatisticalAccount from './StatisticalAccount/StatisticalAccount'
import React from 'react';
import './ManageAccount.scss'
const ManageAccount = () => {
    return (
        <>
            <Row className='Home-ManageAccount'>
                <Col lg={16} md={24} sm={24} xs={24}>
                    <ManageAccountBan />
                </Col>
                <Col lg={7} md={24} sm={24} xs={24}>
                    <StatisticalAccount />
                </Col>
            </Row>
            <Row className='Home-ManageAccount'>
                <Col span={24}>
                    Tài khoản bị quên mật khẩu
                </Col>
            </Row>
        </>
    )
}
export default ManageAccount;