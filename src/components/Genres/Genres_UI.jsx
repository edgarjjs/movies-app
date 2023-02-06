import { useEffect, useState } from "react";
import { getData } from "../../tools/getData";
import { MovieCard } from "../MovieCard";
import "./genres.css";

export const Genres_UI = () => {
  const [genres, setGenres] = useState([]);
  const [data, setData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(0);

  useEffect(() => {
    getData("/genre/movie/list").then((res) => setGenres(res.genres));
    selectedGenre
      ? getData(
        "/discover/movie",
        `&watch_region=MX&sort_by=vote_count.desc&with_genres=${selectedGenre}`
      ).then((res) => setData(res.results))
      : getData(
          "/discover/movie",
          `&watch_region=MX&sort_by=vote_count.desc`
        ).then((res) => setData(res.results))
  }, [selectedGenre]);

  return (
    <>
      <div className="genres-list-container">
        <div className={`genre-item ${selectedGenre == 0 ? 'active' : ''}`} onClick={() => setSelectedGenre(0)}>Todos</div>
        {genres.map((genre) => (
          <div
            className={`genre-item ${selectedGenre == genre.id ? 'active' : ''}`}
            key={genre.id}
            onClick={() => setSelectedGenre(genre.id)}
          >
            {genre.name}
          </div>
        ))}
      </div>
      <h2 className="filtered-genre-title">Resultados</h2>
      <section className="filtered-genre-container">
        {data.map((e) => (
          <MovieCard
            key={e.id}
            poster={e.poster_path}
            title={e.title}
            release={e.release_date}
            movieID={e.id}
          />
        ))}
      </section>
    </>
  );
};
