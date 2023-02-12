import { NavLink } from "react-router-dom";
import "./seasonCard.css";

export const SeasonCard_UI = ({season, id}) => {

  const base_url = "https://image.tmdb.org/t/p/w300";

  return (

    <article className="season-card-poster">
      <div className="poster-header">
        <p>{`Temporada ${season.season_number}`}</p>
      </div>
      <NavLink to={`/details/tv/${id}/season/${season.season_number}`}/>
      <img src={base_url + season.poster_path} alt="" />
      <div className="poster-footer">
        <p>{season.air_date} <strong>/ {season.episode_count} Ep.</strong></p>
      </div>
    </article>
    
  );
};
