import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import { Fetch } from "../fetch/Fetch";

import './landing.css'

export const Landing = ({ setProvider }) => {

  return (
    <>
      <Header setProvider={setProvider}/>

      <main className="layout">
        <Outlet />
      </main>

      {/* <Fetch /> */}
      {/* <Footer /> */}
    </>
  );
};
