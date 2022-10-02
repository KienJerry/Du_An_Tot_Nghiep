import { message } from 'antd';

const key = 'updatable';
export const SuccessRegister = () => {
    message.loading({
      content: 'Loading...',
      key,
    });
    setTimeout(() => {
      message.success({
        content: 'Thành Công!',
        key,
        duration: 2,
      });
    }, 1000);
  };