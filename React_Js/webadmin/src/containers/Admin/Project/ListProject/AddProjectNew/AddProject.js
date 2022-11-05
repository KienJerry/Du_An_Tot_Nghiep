import { Button } from 'antd';
// import './listProject.scss';
import { PlusCircleOutlined } from '@ant-design/icons';

function AddProJect() {
    return (
        <>
            <Button type="primary" icon={<PlusCircleOutlined />}>
                Thêm Dự Án
            </Button>;
        </>
    );
}

export default AddProJect;