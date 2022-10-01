import React, { Fragment } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { publicRouter } from './Router/link';
// import {DefaultLayout } from "./components/Layout";

export default function App() {
    return (
        <Router>
            <Routes>
                {publicRouter.map((route, index) => {
                  const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path} 
                            element={
                                <Page/>
                            }>
                        </Route>
                    )
                })}
                {/* {publicRouter.map((route , index) => {
              const Layout = route.layout ===null ? DefaultLayout : Fragment;
              const Page = route.component
              return(
                <Route 
                  key={index} 
                  path={route.path} 
                  element={
                    <Layout>
                      <Page/>
                    </Layout>
                  }>
                </Route> 
              )
            })} */}
            </Routes>
        </Router>
    );
}
