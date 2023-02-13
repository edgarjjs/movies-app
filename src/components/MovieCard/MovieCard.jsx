import { NavLink } from "react-router-dom";
import "./movie-card.css";

export const MovieCard = ({
  type,
  poster,
  title,
  release,
  first_air_date,
  movieID
}) => {
  const base_url = "https://image.tmdb.org/t/p/w300";
  const date = new Date(`${release ? release : first_air_date ? first_air_date : ''}`)

  return (
      <article className="movie-card">
        <div className="movie-poster">
          <NavLink to={"/details/" + type + "/"+ movieID} />
          {poster
            ? <img src={base_url + poster} />
            : <div className="without-poster"><p>Sin poster</p></div>
          }
          <div className="movie-release-year">{release ? date.toLocaleDateString('es-CO') : first_air_date ? `Desde el ${date.toLocaleDateString('es-CO')}` : <></>}</div>
        </div>
        <p className="movie-name">{title}</p>
      </article>
  );
};
