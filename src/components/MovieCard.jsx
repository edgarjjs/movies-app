import React from "react";
import "../styles/movie-card.css";

export const MovieCard = ({ poster, title, release }) => {
  const base_url = "https://image.tmdb.org/t/p/w300";

  return (
    <article className="movie-card">
      <div className="movie-poster">
        <img src={base_url + poster}></img>
        <div className="movie-release-year">{release}</div>
      </div>
      <p className="movie-name">{title}</p>
    </article>
  );
};
