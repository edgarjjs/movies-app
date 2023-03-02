import star from "../../assets/star.png";
const base_url = "https://image.tmdb.org/t/p/w780";

export const BackdropAndPoster = ({ data }) => {
  return (
    <section className="main-poster-backdrop-container">
      <div className="backdrop-container">
        {data.backdrop_path ? (
          <img className="backdrop-image" src={base_url + data.backdrop_path} />
        ) : (
          <div className="without-backdrop"></div>
        )}
      </div>

      <div className="poster-container">
        <img
          className="poster-image"
          src={data.poster_path && base_url + data.poster_path}
        />

        <div className="poster-aside">
          <h2>
            {data.title ? data.title : data.name ? data.name : "Sin datos"}
          </h2>
          {data.tagline && <p className="tagline">"{data.tagline}"</p>}

          <div className="poster-aside-rate">
            <img src={star} alt="star-icon" />
            <p>
              <strong>
                {data.vote_average && data.vote_average.toFixed(1)}
              </strong>
              /10
            </p>
          </div>
        </div>

        <div className="poster-aside-desktop">
          <h2>
            {data.title ? data.title : data.name ? data.name : "Sin datos"}
          </h2>
          {data.tagline && <p className="tagline">"{data.tagline}"</p>}
          <h3>Descripción</h3>
          <p>
            {data.overview
              ? data.overview
              : "No hay una descripción disponible"}
          </p>

          <div className="poster-aside-desktop-genres">
            <div className="poster-aside-rate-desktop">
              <img src={star} alt="star-icon" />
              <p>
                <strong>
                  {data.vote_average && data.vote_average.toFixed(1)}
                </strong>
                /10
              </p>
            </div>
            <ul>
              {data.genres &&
                data.genres.map((genre) => (
                  <li key={genre.id} className="desktop-genre">
                    {genre.name}
                  </li>
                ))}
            </ul>
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
    </section>
  );
};
