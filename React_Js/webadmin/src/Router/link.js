import NotFound from "../containers/pages/NotFound";
import Login from "../containers/Auth/Login";
import Register from "../containers/Auth/Register";

const publicRouter = [
    {
        path: "/",
        component: ""
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
    publicRouter
}