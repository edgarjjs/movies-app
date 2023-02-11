import { NavLink } from "react-router-dom";
import "./movie-card.css";

export const MovieCard = ({
  type,
  poster,
  title,
  release,
  movieID,
}) => {
  const base_url = "https://image.tmdb.org/t/p/w300";

  return (
      <article className="movie-card">
        <div className="movie-poster">
          <NavLink to={"/details/" + type + "/"+ movieID} />
          <img src={base_url + poster} />
          <div className="movie-release-year">{release}</div>
        </div>
        <p className="movie-name">{title}</p>
      </article>
  );
};
