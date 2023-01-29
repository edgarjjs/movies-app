import React from "react";
import "../styles/header.css";
import search from "../assets/search.svg";
import menu from "../assets/menu.svg";
import { Nav } from "./Nav";
import { Search } from "./Search";

export const Header = ({
  menuToggle,
  setMenuToggle,
  searchIsOpen,
  setSearchIsOpen,
}) => {

  return (
    <header className="header">
      <img
        src={menu}
        alt='menu-button'
        className="burguer-button"
        onClick={() => setMenuToggle(!menuToggle)}
      />
      <h1 className="page-name">Movies App</h1>
      <img
        src={search}
        alt="search-icon"
        className="search-button"
        onClick={() => setSearchIsOpen(!searchIsOpen)}
      />
    </header>
  );
};
