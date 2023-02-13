import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { getData } from "../../tools/getData";
import DisneyPlus from "../../assets/watchProviders/DisneyPlus.svg";
import HBOMax from "../../assets/watchProviders/HBOMax.svg";
import Netflix from "../../assets/watchProviders/Netflix.svg";
import ParamountPlus from "../../assets/watchProviders/ParamountPlus.svg";
import StarPlus from "../../assets/watchProviders/StarPlus.svg";

import "../Slider/slider.css";

export const Slider = ({ type, title, watchProvider, path, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData(path, `${query ? query : ""}`).then((res) => setData(res.results));
  }, []);

  const watchProviders = {
    disney: DisneyPlus,
    hbo: HBOMax,
    netflix: Netflix,
    paramount: ParamountPlus,
    star: StarPlus,
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div className="main-slider-container">
        {title ? (
          <div className="slider-header">
            <h3>{title}</h3>
            <button className="button-more">Ver más</button>
          </div>
        ) : (
          <div className={`custom-header ${watchProvider}`}>
            <img src={watchProviders[watchProvider]} alt="watch-provider" />
            <button className="button-more">Ver más</button>
          </div>
        )}

        <div className={`cards-container ${watchProvider}`}>
          <section className='cards-wrapper'>
            {data &&
              data.map(
                (e, index) =>
                  index < 10 && (
                    <MovieCard
                      type={type}
                      movieID={e.id}
                      key={e.id}
                      title={e.title || e.name}
                      poster={e.poster_path}
                      release={e.release_date}
                      first_air_date={e.first_air_date}
                    />
                  )
              )}
          </section>
        </div>

      </div>
    );
  }
};
