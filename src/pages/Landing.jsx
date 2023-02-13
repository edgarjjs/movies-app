import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";
import { Fetch } from "../fetch/Fetch";

export const Landing = () => {

  return (
    <>

      <Header/>


      <Outlet />

      {/* <Fetch /> */}
      {/* <Footer /> */}
    </>
  );
};
