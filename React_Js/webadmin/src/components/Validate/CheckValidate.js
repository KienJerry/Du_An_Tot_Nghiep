const numbers = /^[0][0-9]{9,12}$/g;
const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
const FormatName = /^[a-z A-Z ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{8,}$/i;

export const Validate_Name =[
    {
        required: true,
        message: 'Tên không được bỏ trống !'
    },
    {
        pattern : FormatName,
        message: 'Tên không được có ký đặc biệt và lớn hơn 8 ký tự !'
    },

]

export const Validate_Email =[
    {
        required: true,
        message: 'Email không được bỏ trống !'
    },
    {
        type : "email",
        message: 'Email sai định dạng !'
    },

]

export const Validate_Phone =[
    {
        required: true,
        message: 'Số điện thoại không được bỏ trống !'
    },
    {
        pattern : numbers,
        message: 'Số điện thoại sai định dạng !'
    },

]
export const Validate_Password =[
    {
        required: true,
        message: 'Mật Khẩu không được bỏ trống !'
    },
    {
        pattern : passwordRegex,
        message: 'Mật khẩu ít nhất 8 kí tự, có 1 chữ số, chữ hoa, chữ thường và kí tự đặc biệt !'
    },

]

export const Validate_Re_Password =[
    {
        required: true,
        message: 'Nhập lại mật khẩu không được bỏ trống !'
    },
    ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject('Nhập lại mật khẩu không chính xác !');
        },
      }),
]

export const Validate_Checker =[
    {
        required: true,
        type: "boolean",
        message: 'Bạn chưa đồng ý điều khoản và dịch vụ !'
    },

]
export const Validate_Captcha =[
    {
        required: true,
        type: "boolean",
        message: 'Captcha không được bỏ trống !'
    },
]