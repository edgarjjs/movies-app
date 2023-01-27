import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { API_KEY } from "../key";

import "../styles/main.css";

export const Slider = ({ title, path }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData({ path }, setData);
  }, []);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3${path}?api_key=${API_KEY}&language=es&timezone=America%2FBogota&with_watch_providers=%2C531&watch_region=AR&without_genres=%2C27%2C80%2C14%2C37&certification_country=US&certification.lte=G%2CPG-13%2CR%2CNR%2CPG`
    );
    const data_JSON = await response.json();
    setData(data_JSON.results);
  };

  return (
    <>
      <div className="section-header">
        <h3>{title}</h3>
        <button className="button-more">Ver más</button>
      </div>

      <section className="slider-wrapper">
        <div className="slider-container">
          {data.map(
            (e, index) =>
              index < 6 && (
                <MovieCard
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
        </div>
      </section>
    </>
  );
};
