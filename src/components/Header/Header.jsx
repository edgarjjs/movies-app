import { useState } from "react";
import "./header.css";
import search from "../../assets/search.svg";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.png";
import { AsideMenu } from "../AsideMenu/AsideMenu";
import { Search_UI } from "../Search/Search_UI";

export const Header = () => {

  const [activeSearch, setActiveSearch] = useState(false);
  const [activeAside, setActiveAside] = useState(false);

  return (
    <>

      <AsideMenu 
        activeAside={activeAside}
        setActiveAside={setActiveAside}
      />

      <header className="header">
        <img
          src={menu}
          alt="menu-button"
          className="burguer-button"
          onClick={() => setActiveAside(!activeAside)}
        />

        <div className="page-logo">
          <img src={logo} alt="" />
          <p>Movies App</p>
        </div>

        <img
          src={search}
          alt="search-icon"
          className="search-button"
          onClick={() => setActiveSearch(!activeSearch)}
        />

        <Search_UI
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
        />

      </header>
    </>
  );
};
