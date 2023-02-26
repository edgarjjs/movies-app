import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import './landing.css'

export const Landing = () => {

  return (
    <>
      <Header />

      <main className="layout">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
