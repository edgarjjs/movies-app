import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Main } from "../components/Main"
import { Nav } from "../components/Nav";

export const PrincipalRouter = () => {
  return (
    <BrowserRouter>
      <Landing>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="*" element={<h1>PÁGINA NO ENCONTRADA - ERROR 404</h1>} />
        </Routes>
      </Landing>
    </BrowserRouter>
  );
};
