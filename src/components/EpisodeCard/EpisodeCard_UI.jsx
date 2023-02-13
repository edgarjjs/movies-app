import star from '../../assets/star.png'
import './episodeCard.css'

export const EpisodeCard_UI = ({data}) => {

  const base_url = "https://image.tmdb.org/t/p/original";

  return (

    <article className="card-episode">
      <div className="card-episode-background">
        <div className="info">
          <div className="info-votes">
            <img src={star} alt="star-icon" />
            <p>{data.vote_average.toFixed(1)}</p>
          </div>
          <p className="episode-runtime">{`${data.runtime} min`}</p>
        </div>

        <div className="title">
          <p>
            <strong>{`Episodio ${data.episode_number}: `}</strong>
            {data.name}
          </p>
        </div>
        <img
          className="image"
          src={data.still_path ? base_url + data.still_path : ""}
          alt="background-image"
        />
      </div>

      <div className="card-details">
        <p className="overview">
          {data.overview ? data.overview : "Sin descripción"}
        </p>
      </div>
    </article>

  );
};
