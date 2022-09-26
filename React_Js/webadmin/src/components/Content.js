import React, { Component } from 'react';
import Bangchamcong from "./formList/Bangchamcong"
import Phongbancuatoi from "./formList/Phongbancuatoi"
import Nhungduancuatoi from "./formList/Nhungduancuatoi"
import Login from "../Auth/LoginForm"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class Content extends Component {
    render() {
        return (
            <div className="content-wrapper">
                     
                <section className="content-header">
                    <div className="row">
                        
                        <div className="col-md-12">
                            <div className="box">
                                
                                <div className="box-header with-border">
                                    <h3 className="box-title">.</h3>
                                
                                    <BrowserRouter>
                                       <Routes> 
                                     
                                            <Route path="/bangChamCong" element={<Bangchamcong />} />
                                            <Route path="/phongbancuatoi" element={<Phongbancuatoi />} />
                                            <Route path="/nhungduancuatoi" element={<Nhungduancuatoi />} />
                                        </Routes>
                                    </BrowserRouter>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}