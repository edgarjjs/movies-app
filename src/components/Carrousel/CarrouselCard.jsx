import { NavLink, useNavigate } from "react-router-dom";

export const CarrouselCard = ({ type, background, poster, title, id }) => {
  const base_url = "https://image.tmdb.org/t/p/";

  const navigate = useNavigate()

  return (
    <article className="carrousel-card">
      
      <img
        src={`${base_url}original${background}`}
        alt="background-image"
        className="carrousel-card-background"
      />

      <img
        className="carrousel-card-poster"
        src={`${base_url}w300${poster}`}
        onClick={() => navigate("/details/" + type + "/" + id)}
      />

      <h3 className="carrousel-card-title">{title}</h3>
    </article>
  );
};
