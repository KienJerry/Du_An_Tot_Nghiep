import React, { Component } from 'react';
 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Auth/LoginForm"
import Register from "./Auth/Dangky"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Content from "./components/Content"
 
class App extends Component {

    render() {

        return (

            <div >
                      <div>
                <BrowserRouter>
                    <Routes>

                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                    </Routes>
                </BrowserRouter>

                  
                </div>
        
                <div>
                    <Header />
                    <SideBar />
                    <Content />
                    </div>
                {/* <BrowserRouter>
                    <Routes>

                        {!logado && <Route path="/" element={<Login logado={logado} />} />}

                    </Routes>

                </BrowserRouter> */}

            </div>
        );
    }
}

export default App;




