import { Button, Modal } from 'antd';
import React, { useState } from 'react';
export default function SeenAccountStaff({setSeenModal, seenModal , list}) {
    const handleOk = () => {
        console.log('acb');
    };
    return (
        <>
            <Modal title="Basic Modal" open={seenModal} onOk={handleOk}  onCancel={() => setSeenModal(false)}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};