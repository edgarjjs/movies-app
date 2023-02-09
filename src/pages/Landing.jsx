import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Search } from "../components/Search/Search_UI.jsx";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Fetch } from "../components/Fetch";
import { Slider } from "../components/Slider";
import { Carrousel } from "../components/Carrousel/Carrousel";

export const Landing = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <>
      <Header
        setMenuToggle={setMenuToggle}
        menuToggle={menuToggle}
        searchIsOpen={searchIsOpen}
        setSearchIsOpen={setSearchIsOpen}
      />

      {menuToggle && (
        <Nav menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      )}
      {searchIsOpen && (
        <Search searchIsOpen={searchIsOpen} setSearchIsOpen={setSearchIsOpen} />
      )}
      <Outlet />

      {/* <Fetch /> */}
      {/* <Footer /> */}
    </>
  );
};
