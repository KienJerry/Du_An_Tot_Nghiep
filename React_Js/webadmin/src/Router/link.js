import NotFound from "../containers/pages/NotFound";
import Login from "../containers/Auth/Login";

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
]

export {
    publicRouter
}