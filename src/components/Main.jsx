import { API_KEY } from "../key";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import "../styles/main.css";

export const Main = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  const getData = async (query, setter) => {
    const response = await fetch(
      `https://api.themoviedb.org/3${query}?api_key=${API_KEY}&language=es`
    );
    const data_JSON = await response.json();
    setter(data_JSON.results);
  };

  // const getData = () => {
  //   fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY)
  //     .then(response => response.json())
  //     .then(json => setData(json.results))
  // }

  useEffect(() => {
    getData("/trending/movie/day", setData);
  }, []);

  useEffect(() => {
    getData("/discover/movie/", setData2);
  }, []);

  useEffect(() => {
    getData("/tv/popular/", setData3);
  }, []);

  return (
    <section>
      <h3>Películas en tendencia</h3>
      <div>
        <section className="trends-container">
          {data.map((e) => (
            <MovieCard
              key={e.id}
              title={e.title}
              poster={e.poster_path}
              release={new Date(e.release_date).getFullYear()}
            />
          ))}
        </section>

        <h3>Descubre películas</h3>
        <section className="trends-container">
          {data2.map((e) => (
            <MovieCard
              key={e.id}
              title={e.title}
              poster={e.poster_path}
              release={new Date(e.release_date).getFullYear()}
            />
          ))}
        </section>

        <h3>Descubre series</h3>
        <section className="trends-container">
          {data3.map((e) => (
            <MovieCard
              key={e.id}
              title={e.name}
              poster={e.poster_path}
              release={e.first_air_date}
            />
          ))}
        </section>
      </div>
    </section>
  );
};
