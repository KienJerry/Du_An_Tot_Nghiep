import { Avatar, List, Breadcrumb, Button } from 'antd';
import React, { useEffect, useState, useReducer } from 'react';
import { getlistForgotPw, } from '../../../../../Reducer/InitReducer/Staff/ListStaff';
import { ForgetAccountListGet, } from '../../../../../Reducer/Reducers/Staff/listStaff';
import { getListAccountForgotPassword } from '../../../../../Reducer/Fetch_API/getlistStaff';
import { API_GET_URL_IMAGE_USER_OUTLINE } from '../../../../../api/index';
import moment from 'moment';
import './ForgetAccount.scss';
export default function ManageAccountBan() {
    const [copySuccess, setCopySuccess] = useState('');
    const [state, dispatch] = useReducer(ForgetAccountListGet, getlistForgotPw);
    const [data, setData] = useState([]);
    const loadMoreData = () => {
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results]);
            })
            .catch(() => {
            });
    };
    useEffect(() => {
        loadMoreData();
        getListAccountForgotPassword(dispatch)
    }, []);


    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };


    return (
        <>
            <Breadcrumb className='label-breadcrumb'>
                <Breadcrumb.Item>Cấp mật khẩu</Breadcrumb.Item>
            </Breadcrumb>
            <div
                className='Bg-ForgetAccount'
            >
                <List
                    dataSource={state.all}
                    renderItem={(item) => (
                        <List.Item key={item.email}>
                            <List.Item.Meta
                                avatar={<Avatar src={API_GET_URL_IMAGE_USER_OUTLINE} />}
                                title={<p>{item.email}</p>}
                                description={item.thoigian && moment(item.thoigian).format("YYYY-MM-DD HH:mm:ss")}
                            />
                            <div className='ForgetAccount'>Cấp lại mật khẩu</div>
                            {item.done === "2" &&
                                <>
                                    <Button className='copyToClipBoardPw' onClick={() => copyToClipBoard('Nguyễn Thế Kiên')}>
                                        Sao chép mật khẩu
                                    </Button>
                                    <div className='ForgetAccountDel'>Xoá</div>
                                </>
                            }
                        </List.Item>
                    )}
                />
            </div>
        </>
    );
};