import "../Search/search.css";
import back from "../../assets/back.png";
import { search } from "./search";
import { useEffect, useState } from "react";
import { CardSearched } from "../CardSearched/CardSearched";

export const Search = ({ searchIsOpen, setSearchIsOpen }) => {

  const [searchedWords, setSearchedWords] = useState("");
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {

    searchedWords.length == 0 && setApiResponse('')
    searchedWords && search(searchedWords).then((data) =>
      setApiResponse(
        data.sort(
          (a, b) =>
            a.popularity -
            b.popularity
        ).reverse()
      )
      
    );
  }, [searchedWords]);


  return (
    <div className="search-container">
      <div className="input-container">
        <img
          src={back}
          alt="back-button"
          className="back-button"
          onClick={() => setSearchIsOpen(!searchIsOpen)}
        />
        <input
          autoFocus
          className="input-search"
          type="text"
          placeholder="Buscar película o serie"
          onChange={(e) => setSearchedWords(e.target.value)}
        />
      </div>
      <section className="search-results">
        {
         apiResponse && apiResponse.map((e) => <CardSearched data={e} key={e.id} />)
        }
      </section>
    </div>
  );
};
