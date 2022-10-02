import { message } from 'antd';

const key = 'updatable';
export const ErrorRegister = () => {
  message.loading({
    content: 'Loading...',
    key,
  });
  setTimeout(() => {
    message.error({
      content: 'Thất bại ! email đã được sử dụng',
      key,
      duration: 2,
    });
  }, 1000);
};

export const ErrorLogin = () => {
  message.loading({
    content: 'Loading...',
    key,
  });
  setTimeout(() => {
    message.error({
      content: 'Thất bại ! Sai tài khoản hoặc mật khẩu',
      key,
      duration: 2,
    });
  }, 1000);
};