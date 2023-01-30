import React, { useState } from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Fetch } from "../components/Fetch";
import { ActorCard } from "../components/ActorCard";

export const Landing = ({ children, showHeader }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <>
      {showHeader && (
        <Header
          setMenuToggle={setMenuToggle}
          menuToggle={menuToggle}
          searchIsOpen={searchIsOpen}
          setSearchIsOpen={setSearchIsOpen}
        />
      )}

      {menuToggle && (
        <Nav menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      )}
      {searchIsOpen && (
        <Search searchIsOpen={searchIsOpen} setSearchIsOpen={setSearchIsOpen} />
      )}

      {children}
      {/* <Fetch /> */}
      {/* <Footer /> */}
    </>
  );
};
