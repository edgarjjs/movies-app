import { NavLink } from "react-router-dom";

export const CarrouselCard = ({ type, background, poster, title, id }) => {
  const base_url = "https://image.tmdb.org/t/p/";

  return (
    <article className="carrousel-card">
      <img
        src={`${base_url}original${background}`}
        alt="background-image"
        className="carrousel-card-background"
      />

      <div className="carrousel-card-overview">
        <h3 className="carrousel-card-title">{title}</h3>
        <div className="carrousel-card-poster-container">
          <NavLink to={"/details/" + type + "/"+ id}>
          </NavLink>
          <img
              className="carrousel-card-poster"
              src={`${base_url}w300${poster}`}
            />
        </div>
      </div>
    </article>
  );
};
