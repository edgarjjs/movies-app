import "../Search/search.css";
import back from "../../assets/back.png";
import { search } from "./search";
import { useEffect, useState } from "react";
import { CardSearched } from "../CardSearched/CardSearched";

export const Search_UI = ({ activeSearch, setActiveSearch }) => {
  const [searchedWords, setSearchedWords] = useState("");
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    searchedWords &&
      search(searchedWords).then((data) =>
        setApiResponse(data.sort((a, b) => b.popularity - a.popularity))
      );
  }, [searchedWords]);

  return (
    <div
      className={`search-container ${
        activeSearch ? "active-search-container" : ""
      }`}
    >
      <div
        className={`input-container ${
          activeSearch ? "active-search-input" : ""
        }`}
      >
        <img
          src={back}
          alt="back-button"
          className="back-button"
          onClick={() => {
            setActiveSearch(!activeSearch);
            setApiResponse([]);
          }}
        />

        {/* Se trea el componente con esta condicion
        para que funcione el autofocus */}
        {activeSearch ? (
          <input
            autoFocus
            className="input-search"
            type="text"
            placeholder="Buscar película o serie"
            onChange={(e) =>
              e.target.value
                ? setSearchedWords(e.target.value)
                : setApiResponse([])
            }
          />
        ) : (
          <></>
        )}
      </div>

      <section className="search-results">
        {apiResponse.length ? (
          apiResponse.map((e) => <CardSearched data={e} key={e.id} />)
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};
