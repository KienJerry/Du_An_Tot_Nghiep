import NotFound from "../containers/pages/NotFound";
import Login from "../containers/Auth/Login";
import Register from "../containers/Auth/Register";
import Home from '../containers/User/HomePage';
import Admin from '../containers/Admin/HomePage/index';
import unAuth from '../containers/Auth/unAuth/index';
import ListAccount from '../containers/Admin/Account/fullListAccount/list_account';
import UpdateProfile from "../containers/Admin/DropdownShow/UpdateProfile";
import ChangePassword from "../containers/Admin/DropdownShow/ChangePassword";
import UserNew from '../containers/Admin/Account/UserNew/userNew';
import ManageAccount from "../containers/Admin/Account/ManageAccount/ManageAccount";
import ListProject from "../containers/Admin/Project/ListProject/listProject";
import FormAddProject from "../containers/Admin/Project/ListProject/AddProjectNew/FormAddProject";
import ManageTypeProject from '../containers/Admin/PageManage/ManageTypeProject/ManageTypeProject';
import {NaviLayout} from '../containers/Admin';

const publicRouter = [
    {
        path: "/",
        component: Home,
        admins : false,
    },
    {
        path: "/*",
        component: NotFound,
    },
    {
        path: "/dang-nhap",
        component: Login,
    },
    {
        path: "/dang-ky",
        component: Register,
    },
]

const AdminRoute = [
    {
        path: "/",
        component : Admin,
        admins : true,
    },
    {
        path: "/*",
        component: NotFound,
        // layout : NaviLayout,
        layout : null ,

    },
    {
        path: "/dang-nhap",
        component: Login,
    },
    {
        path: "/dang-ky",
        component: Register,
    },
    {
        path: "/danh-sach-nhan-vien",
        component: ListAccount,
    },
    {
        path: "/Dang-ky-moi",
        component: UserNew,
    },
    {
        path: "/thong-tin-ca-nhan",
        component: UpdateProfile,
    },
    {
        path: "/doi-mat-khau",
        component: ChangePassword,
    },
    {
        path: "/quan-ly-tai-khoan",
        component: ManageAccount,
    },
    {
        path: "/danh-sach-du-an",
        component: ListProject,
    },
    {
        path: "/danh-sach-du-an/them-du-an",
        component: FormAddProject,
    },
    {
        path: "/quan-ly-loai-du-an",
        component: ManageTypeProject,
    },
]

const AuthRoute = [
    {
        path: "/",
        component : unAuth
    },
    {
        path: "/*",
        component: NotFound
    },
    {
        path: "/dang-nhap",
        component: Login
    },
    {
        path: "/dang-ky",
        component: Register
    },
]

export {
    publicRouter ,
    AdminRoute ,
    AuthRoute
}