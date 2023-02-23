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

  return (
    <>
      <div
        className={`blur-input-container ${
          activeSearch ? "blur-input-active" : ""
        }`}
        onClick={() => setActiveSearch((prevState) => !prevState)}
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

        <Search_UI
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
          searchedWords={searchedWords}
          setSearchedWords={setSearchedWords}
        />

        <img
          src={search}
          alt="search-button"
          onClick={() => setActiveSearch(!activeSearch)}
          className="header-search-button"
        />

        <NavHeader />
      </header>
    </>
  );
};
