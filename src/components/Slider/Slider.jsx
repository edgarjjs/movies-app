import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard";
import { getData } from "../../tools/getData";
import DisneyPlus from "../../assets/watchProviders/DisneyPlus.svg"
import HBOMax from "../../assets/watchProviders/HBOMax.svg"
import Netflix from "../../assets/watchProviders/Netflix.svg"
import ParamountPlus from "../../assets/watchProviders/ParamountPlus.svg"
import StarPlus from "../../assets/watchProviders/StarPlus.svg"


import "../Slider/slider.css";

export const Slider = ({ title, watchProvider, path, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData(path, `${query ? query : ""}`).then((res) => setData(res.results));
  }, []);

  // const watchProviders = [DisneyPlus, HBOMax, Netflix, ParamountPlus, StarPlus];
  
  const watchProviders = {
    disney: DisneyPlus,
    hbo: HBOMax,
    netflix: Netflix,
    paramount: ParamountPlus,
    star: StarPlus
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {

    console.log(watchProviders['disney'])

  
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
              src={watchProviders[watchProvider]}
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