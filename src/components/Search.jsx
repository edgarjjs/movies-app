import React from "react";
import "../styles/search.css";
import back from "../assets/back.png";

export const Search = ({ searchIsOpen, setSearchIsOpen }) => {
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
          className="input-search"
          type="text"
          placeholder="Buscar película o serie"
        />
      </div>
    </div>
  );
};
