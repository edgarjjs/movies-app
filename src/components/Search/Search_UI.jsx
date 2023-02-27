import "../Search/search.css";
import arrow from "../../assets/back.png";
import search_icon from "../../assets/search.svg";
import { search } from "./search";
import { useEffect, useState } from "react";
import { CardSearched } from "../CardSearched/CardSearched";

export const Search_UI = ({
  activeSearch,
  setActiveSearch,
  searchedWords,
  setSearchedWords,
}) => {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    searchedWords
      ? search(searchedWords).then((data) =>
          setApiResponse(data.sort((a, b) => b.popularity - a.popularity))
        )
      : setSearchedWords("");
    setApiResponse([]);
  }, [searchedWords]);

  const handleClickDesktopSearch = () => {
    setActiveSearch(prevState => !prevState);
    setSearchedWords('')
  }


  
  return (
    <section className={`main-search-container ${
      activeSearch ? "active-background-container" : ""
    }`}>
      <div
        className={`input-container ${
          activeSearch ? "active-input-container" : ""
        }`}
      >
        <img
          src={arrow}
          alt="back-button"
          className="back-button-search"
          onClick={() => {
            setActiveSearch(!activeSearch);
            setApiResponse([]);
          }}
        />

        {/* Se trae el componente con esta condicion
          para que funcione el autofocus */}
        {activeSearch ? (
          <input
            autoFocus
            type="text"
            placeholder="Buscar película"
            onChange={(e) => setSearchedWords(e.target.value)}
          />
        ) : (
          <></>
        )}
      </div>

      <div
        className={`search-results ${activeSearch ? "active-results" : ""}`}
      >
        {searchedWords ? (
          apiResponse.map((e) => <CardSearched data={e} key={e.id} />)
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};
