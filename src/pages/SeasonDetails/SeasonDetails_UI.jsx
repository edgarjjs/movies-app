import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../tools/getData";

import './seasonDetails.css'

export const SeasonDetails_UI = () => {


  const [data, setData] = useState([])

  useEffect(() => {
    getData(`/tv/${id}/season/${season}`).then(res => setData(res))
  }, [])

  const { id, season } = useParams();

  const base_url = "https://image.tmdb.org/t/p/original";

  console.log(data)

  return (
    
    <div className="season-container">
      <h1 className="season-title">Temporada {season}</h1>
      <div className="season-poster">
          <img src={base_url + data.poster_path} alt="poster-image" />
      </div>
      <div className="season-overview">
        {data.overview && <p>{data.overview}</p>}
      </div>
      <section className="episode-cards-container">
        <div className="episode-cards-container-line"></div>
        {data.episodes &&
          data.episodes.map((e) => (

            <article className="card-episode">
              <div className="card-episode-background">
                <div className="info">
                  <p>{e.vote_average.toFixed(1)}</p>
                  <p>{`${e.runtime} min`}</p>
                </div>
                <div className="title">
                  <p>
                    <strong>{`Episodio ${e.episode_number}: `}</strong>
                    {e.name}
                  </p>
                </div>
                <img
                  className="image"
                  src={base_url + e.still_path}
                  alt="background-image"
                />
              </div>

              <div className="card-details">
                <p className="overview">{e.overview}</p>
              </div>
            </article>
            
          ))}
      </section>
    </div>
  );
};
