import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../../tools/getData";
import back_button from "../../assets/back.png";

import "./seasonDetails.css";
import { EpisodeCard_UI } from "../../components/EpisodeCard/EpisodeCard_UI";
import { Footer } from "../../components/Footer/Footer";

export const SeasonDetails_UI = () => {
  const [data, setData] = useState([]);
  const [renderCards, setRenderCards] = useState(0);

  useEffect(() => {
    getData(`/tv/${id}/season/${season}`).then((res) => setData(res));
  }, []);

  const { id, season } = useParams();

  const base_url = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();
  return (
    <>
      <div className="season-container">
        <div className="season-back-button">
          <img
            src={back_button}
            alt="back-button"
            onClick={() => navigate(-1)}
          />
        </div>

        <h1 className="season-title">Temporada {season}</h1>
        <div className="season-poster">
          <img
            src={data.poster_path ? base_url + data.poster_path : ""}
            alt="poster-image"
          />
        </div>
        <div className="season-overview">
          {data.overview && <p>{data.overview}</p>}
        </div>
        <section className="episode-cards-container">
          <div className="episode-cards-container-line"></div>

          {data.episodes &&
            data.episodes
              .filter(
                (e) =>
                  (e.runtime && e.still_path) ||
                  e.overview ||
                  e.vote_count ||
                  e.vote_average
              )
              .map((e) => <EpisodeCard_UI data={e} key={e.id} />)}
        </section>
      </div>
      <Footer />
    </>
  );
};
