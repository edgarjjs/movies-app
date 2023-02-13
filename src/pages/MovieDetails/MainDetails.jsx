import { useNavigate } from "react-router-dom";
import { DetailsSummary } from "./DetailsSummary";


import star from "../../assets/star.png";
import back_button from "../../assets/back.png";

import './movie-details.css'
import { HomeButton } from "../../components/HomeButton/HomeButton";



export const MainDetails = ({data, director}) => {

  const base_url = "https://image.tmdb.org/t/p/w780";
  const navigate = useNavigate();

  return (

    <section className="main-details-container">
    <HomeButton />

    <div className="backdrop-container">
      <div className="backdrop-button">
        <img
          src={back_button}
          alt="back-button"
          onClick={() => navigate(-1)}
        />
      </div>
      {data.backdrop_path ? (
        <img
          className="backdrop-image"
          src={base_url + data.backdrop_path}
        />
      ) : (
        <div className="without-backdrop"></div>
      )}
    </div>

    <div className="details-container">

      <div className="poster-container">
        <img className="poster-image" src={data.poster_path && base_url + data.poster_path} />
        <div className="poster-aside">
          <h2>{data.title ? data.title : data.name ? data.name : 'Sin datos'}</h2>
          {data.tagline && <p>{data.tagline}</p>}
          <div className="poster-aside-info">
            <img src={star} alt="star-icon" />
            <p>
              <strong>
                {data.vote_average && data.vote_average.toFixed(1)}
              </strong>
              /10
            </p>
          </div>
        </div>
      </div>

      <div className="genres-container">
        <ul>
          {data.genres &&
            data.genres.map((genre) => (
              <li key={genre.id} className="genre">
                {genre.name}
              </li>
            ))}
        </ul>
      </div>

      <div className="description">
        <h3>Descripción</h3>
        <p>{data.overview}</p>
      </div>

      <DetailsSummary data={data} director={director ? director : ''} />

    </div>
  </section>
  )
}
