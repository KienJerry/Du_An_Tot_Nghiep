import React, { Fragment } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { publicRouter, AdminRoute, AuthRoute } from './Router/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const Check_Login = localStorage.getItem('Save_Login');
    const Home = JSON.parse(Check_Login);
    let a;
    { Home != null && Home.phanquyen == "true" ? a = AdminRoute : Home != null && Home.phanquyen == "false" ? a = publicRouter : a = AuthRoute }
    return (
        <Router>
            <Routes>
                {a.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Page />
                            }>
                        </Route>
                    )
                })}
            </Routes>
        </Router>
    );
}
