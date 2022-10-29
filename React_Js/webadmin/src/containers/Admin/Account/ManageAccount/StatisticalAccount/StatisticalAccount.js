import { Avatar, Divider, List, Skeleton, Breadcrumb } from 'antd';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './StatisticalAccount.scss';
export default function ManageAccountBan() {
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
    }, []);
    return (
        <>
            <Breadcrumb className='label-breadcrumb'>
                <Breadcrumb.Item>Thống kê tài khoản</Breadcrumb.Item>
            </Breadcrumb>
            <div
                id="scrollableDiv"
                className='Bg-manageAccountStatistical'
            >
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMoreData}
                    hasMore={data.length < 50}
                    loader={
                        <Skeleton
                            avatar
                            paragraph={{
                                rows: 1,
                            }}
                            active
                        />
                    }
                    endMessage={<Divider plain>WEBSITE QUẢN LÝ NHÂN VIÊN - QUỐC HƯNG</Divider>}
                    scrollableTarget="scrollableDiv"
                >
                    <List
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item key={item.email}>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.picture.large} />}
                                    title={<a href="https://ant.design">ADMIN</a>}
                                    description={item.email}
                                />
                                <div className='statistical_manage_account'>12 tài khoản</div>
                            </List.Item>
                        )}
                    />
                </InfiniteScroll>
            </div>
        </>
    );
};