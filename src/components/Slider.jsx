import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { getData } from "../tools/getData";

import "../styles/slider.css";

export const Slider = ({ title, path }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(path, '&region=MX').then(res => {setData(res.results), setIsLoading(false)});
  }, []);


  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div className="main-slider-container">
        <div className="slider-header">
          <h3>{title}</h3>
          <button className="button-more">Ver más</button>
        </div>
        <section className="slider-wrapper">
            {data.map(
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
