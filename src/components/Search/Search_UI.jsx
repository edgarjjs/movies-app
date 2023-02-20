import "../Search/search.css";
import arrow from "../../assets/back.png";
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
    : setSearchedWords('')
      setApiResponse([])

  }, [searchedWords]);



  return (
    <div
      className={`search-container ${
        activeSearch ? "active-search-container" : ""
      }`}
    >
      <div
        className={`input-container ${
          activeSearch ? "active-input-container" : ""
        }`}
      >
        <img
          src={arrow}
          alt="back-button"
          className="back-button"
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
            className="input-search"
            type="text"
            placeholder="Buscar película o serie"
            onChange={(e) => setSearchedWords(e.target.value)}
          />
        ) : (
          <></>
        )}
      </div>

      <section className="search-results">
        {searchedWords ? (
          apiResponse.map((e) => <CardSearched data={e} key={e.id} />)
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};
