import NotFound from "../containers/pages/NotFound";
import Login from "../containers/Auth/Login";
import Register from "../containers/Auth/Register";
import Home from '../containers/User/HomePage';
import Admin from '../containers/Admin/HomePage/index';
import unAuth from '../containers/Auth/unAuth/index';
import ListAccount from '../containers/Admin/Account/list_account';
import UpdateProfile from "../containers/Admin/DropdownShow/UpdateProfile";
import ChangePassword from "../containers/Admin/DropdownShow/ChangePassword";
import {NaviLayout} from '../containers/Admin'

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
        path: "/thong-tin-ca-nhan",
        component: UpdateProfile,
        // layout : null ,
    },
    {
        path: "/doi-mat-khau",
        component: ChangePassword,
        // layout : NaviLayout
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