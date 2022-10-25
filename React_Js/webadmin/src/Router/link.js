import NotFound from "../containers/pages/NotFound";
import Login from "../containers/Auth/Login";
import Register from "../containers/Auth/Register";
import Home from '../containers/Home/HomePage';
import Admin from '../containers/Admin/HomePage/index';
import unAuth from '../containers/unAuth/index';
import ListAccount from '../containers/Admin/Account/list_account'
import ListDuAn from'../containers/Admin/PagesAll/DanhSachDuAn/List_DuAn'
import ListHdDuAn from'../containers/Admin/PagesAll/HoatDongDuAn/List_HdDuAn'

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
        path: "/danh-sach-nhan-vien",
        component: ListAccount
    },
    {
        path: "/danh-sach-du-an",
        component: ListDuAn
    },
    {
        path: "/danh-sach-hoat-dong-du-an",
        component: ListHdDuAn
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