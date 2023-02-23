import default_poster from '../../assets/default_poster.svg'
import { NavLink } from "react-router-dom";
import './cardsearched.css'

export const CardSearched = ({data}) => {

  const base_url = "https://image.tmdb.org/t/p/w200";
  
  return (
    <NavLink to={"/details/movie/" + data.id} className="searched-card-container" >

        {data.poster_path ? (
          <img
            className="result-image"
            src={base_url + data.poster_path}
            alt="result-image"
          />
        ) : (
          <div className="without-image">
            <img src={default_poster} alt="default poster" />
          </div>
        )}
        <div className="result-details">
          <h4 className="result-title">{data.title}</h4>
          <p className="result-description">{data.overview}</p>
          <p className="result-date">{data.release_date}</p>
        </div>

    </NavLink>
  );
};
