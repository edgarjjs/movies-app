import { useEffect, useState } from "react";
import "./header.css";
import search from "../../assets/search.svg";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.png";
import { AsideMenu } from "../AsideMenu/AsideMenu";
import { Search_UI } from "../Search/Search_UI";
import { NavHeader } from "../NavHeader/NavHeader";

export const Header = ({ setProvider }) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeAside, setActiveAside] = useState(false);
  const [searchedWords, setSearchedWords] = useState("");

  useEffect(() => {
    !searchedWords && setSearchedWords(prev => '')
  }, [searchedWords]);

  return (
    <>
      <AsideMenu
        activeAside={activeAside}
        setActiveAside={setActiveAside}
        setProvider={setProvider}
        className="aside-component"
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

        <Search_UI
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
          searchedWords={searchedWords}
          setSearchedWords={setSearchedWords}
        />

        <div className={`main-search-container ${activeSearch?'active-search-container':''}`}>
          {activeSearch ? (
            <input
              autoFocus
              className="input-header-search"
              type="text"
              placeholder="Buscar"
              onChange={(e) => setSearchedWords(e.target.value)}
            />
          ) : (
            <></>
          )}

          <img
            src={search}
            alt="search-icon"
            className="search-button"
            onClick={() => setActiveSearch(!activeSearch)}
          />
        </div>

        <NavHeader />

      </header>
    </>
  );
};
