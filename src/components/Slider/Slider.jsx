import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard";
import { getData } from "../../tools/getData";
import Netflix from "../../assets/providers/Netflix.svg";
import DisneyPlus from "../../assets/providers/DisneyPlus.svg";
import StarPlus from "../../assets/providers/StarPlus.svg";
import HBOMax from "../../assets/providers/HBOMax.svg";
import ParamountPlus from "../../assets/providers/ParamountPlus.svg";

import "../Slider/slider.css";

export const Slider = ({ title, watchProvider, path, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData(path, `${query ? query : ""}`).then((res) => setData(res.results));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {

  
    return (
      <div className="main-slider-container">
        {title 
          ? 
          <div className="slider-header">
            <h3>{title}</h3>
            <button className="button-more">Ver más</button>
          </div>
          : 
          <div className={`custom-header ${watchProvider}`}>
            <img
              src={`/react-movies-app/src/assets/providers/${watchProvider}.svg`}
              alt="watch-provider"
            />
            <button className="button-more">Ver más</button>
          </div>
        }

        <section className={`slider-wrapper  ${watchProvider}`}>
          {data &&
            data.map(
              (e, index) =>
                index < 20 && (
                  <MovieCard
                    movieID={e.id}
                    key={e.id}
                    title={e.title || e.name}
                    poster={e.poster_path}
                    release={
                      e.release_date
                        ? `${new Date(e.release_date).getFullYear()}`
                        : e.first_air_date
                        ? `Desde ${new Date(e.first_air_date).getFullYear()}`
                        : `Sin info`
                    }
                  />
                )
            )}
        </section>
      </div>
    );
  }
};
