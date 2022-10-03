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

export const ErrorForgotPW = () => {
  message.loading({
    content: 'Loading...',
    key,
  });
  setTimeout(() => {
    message.error({
      content: 'Thất bại ! Không có email trùng khớp trên hệ thống',
      key,
      duration: 2,
    });
  }, 1000);
};

export const ErrorAccountBan = () => {
  message.loading({
    content: 'Loading...',
    key,
  });
  setTimeout(() => {
    message.error({
      content: 'Thất bại ! Tài khoản này đã bị khoá. Vui lòng liên hệ Admin để biết thêm chi tiết',
      key,
      duration: 2,
    });
  }, 1000);
};

export const ErrorAccountLOCK = () => {
  message.loading({
    content: 'Loading...',
    key,
  });
  setTimeout(() => {
    message.error({
      content: 'Thất bại ! Tài khoản này chưa được duyệt. Vui lòng liên hệ Admin để duyệt',
      key,
      duration: 2,
    });
  }, 1000);
};