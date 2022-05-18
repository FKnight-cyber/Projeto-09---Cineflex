import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./InitialPage";
import Sections from './Sections';
import Chairs from "./Chairs";


export default function App(){
    return(
        <BrowserRouter>
            <header>
                <div className="espaçotopo"></div>
                <div className="topo">CINEFLEX</div>
            </header>
        <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/sessoes/:idFilme" element={<Sections />} />
            <Route path="/assentos/:idSection" element={<Chairs />} />
        </Routes>
        </BrowserRouter>
    );
}