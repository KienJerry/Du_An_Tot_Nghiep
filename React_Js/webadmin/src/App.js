import React, { Fragment } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { publicRouter } from './Router/link';

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
            </Routes>
        </Router>
    );
}
