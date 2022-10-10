import NotFound from "../containers/pages/NotFound";
import Login from "../containers/Auth/Login";
import Register from "../containers/Auth/Register";
import Home from '../containers/Home/HomePage';
import Admin from '../containers/Admin/HomePage/index';
import unAuth from '../containers/unAuth/index';
import ListAccount from '../containers/Admin/Account/list_account'

const publicRouter = [
    {
        path: "/",
        component: Home
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

const AdminRoute = [
    {
        path: "/",
        component : Admin
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
    {
        path: "/danh-sach-tai-khoan",
        component: ListAccount
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