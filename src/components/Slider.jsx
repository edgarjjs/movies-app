import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { API_KEY } from "../key";

import "../styles/main.css";

export const Slider = ({ title, path }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData({ path }, setData);
  }, []);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3${path}?api_key=${API_KEY}&language=es`
    );
    const data = await response.json();
    setData(data.results);
    setIsLoading(false);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
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
          </div>
        </section>
      </>
    );
  }
};
