import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/movie-card.css";

export const MovieCard = ({
  poster,
  title,
  release,
  movieID,
}) => {
  const base_url = "https://image.tmdb.org/t/p/w300";

  return (
    <NavLink to={"/movie_details/" + movieID}>
      <article className="movie-card">
        <div className="movie-poster">
          <img src={base_url + poster} />
          <div className="movie-release-year">{release}</div>
        </div>
        <p className="movie-name">{title}</p>
      </article>
    </NavLink>
  );
};
