import { message, notification } from 'antd';

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

export const SuccessForgotPw = () => {
  message.loading({
    content: 'Loading...',
    key,
  });
  setTimeout(() => {
    notification.success({
      message: 'Thành Công!',
      key,
      duration: 5,
      description:
        'Bạn đã yêu cầu lấy mật khẩu thành công, vui lòng liên hệ quản lý của bạn để lấy mật khẩu mới. Xin cảm ơn !',
    })
  }, 4000);
  setTimeout(() => {
    message.success({
      content: 'Gửi yêu cầu thành công! ',
      key,
      duration: 2,
    });
  }, 1000);
};