import { useEffect, useState } from "react";
import "./header.css";
import search from "../../assets/search.svg";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.png";
import { AsideMenu } from "../AsideMenu/AsideMenu";
import { Search_UI } from "../Search/Search_UI";
import { NavHeader } from "../NavHeader/NavHeader";
import { Link } from "react-router-dom";

export const Header = ({ setProvider }) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeAside, setActiveAside] = useState(false);
  const [searchedWords, setSearchedWords] = useState("");

  useEffect(() => {
    !searchedWords && setSearchedWords((prev) => "");
  }, [searchedWords]);

  useEffect(() => {
    if (activeSearch || activeAside) {
      body.style.overflow = "hidden";
    } else {
      body.style.removeProperty("overflow");
    }
  }, [activeSearch, activeAside]);
  

  // Seleccionando el body para cancelar su scroll
  const body = document.getElementsByTagName("body")[0];

  const handleBlurClick = () => {
    setActiveSearch((prevState) => !prevState);
    setSearchedWords('')
  }



  return (
    <>
      <div
        className={`blur-input-container ${
          activeSearch ? "blur-input-active" : ""
        }`}
        onClick={handleBlurClick}
      ></div>

      <AsideMenu
        activeAside={activeAside}
        setActiveAside={setActiveAside}
        setProvider={setProvider}
      />

      <header className="header">
        <img
          src={menu}
          alt="menu-button"
          className="header-burguer-button"
          onClick={() => setActiveAside(!activeAside)}
        />

        <div className="header-page-logo">
          <Link to="/">
            <img src={logo} alt="" />
            Movies App
          </Link>
        </div>

        <div
          className={`header-search-container ${activeSearch ? "active" : ""}`}
          onClick={() => setActiveSearch(!activeSearch)}
        >
          <img
            src={search}
            alt="search-button"
            className="header-search-button"
          />
          {activeSearch ? (
            <input 
              autoFocus 
              type="search" 
              className="header-search-input" 
              onChange={(e) => setSearchedWords(e.target.value)}              
              />
          ) : (
            <></>
          )}
        </div>

        <NavHeader />
      </header>

      <Search_UI
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        searchedWords={searchedWords}
        setSearchedWords={setSearchedWords}
      />
    </>
  );
};
