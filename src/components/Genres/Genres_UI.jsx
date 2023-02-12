import { useEffect, useState } from "react";
import { getData } from "../../tools/getData";
import { MovieCard } from "../MovieCard/MovieCard";
import "./genres.css";

export const Genres_UI = ({ type }) => {
  const [genres, setGenres] = useState([]);
  const [data, setData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(0);

  useEffect(() => {
    getData(`/genre/${type}/list`).then((res) => setGenres(res.genres));
    selectedGenre
      ? getData(
        `/discover/${type}`,
        `&watch_region=MX&sort_by=vote_count.desc&with_genres=${selectedGenre}`
      ).then((res) => setData(res.results))
      : getData(
          `/discover/${type}`,
          `&watch_region=MX&sort_by=vote_count.desc`
        ).then((res) => setData(res.results));
  }, [type, selectedGenre]);


  return (
    <>
      <div className="genres-list-container">
        <div className={`genre-item ${selectedGenre == 0 ? 'active' : ''}`} onClick={() => setSelectedGenre(0)}>Todos</div>
        {genres.map((genre) => (
          <div
            key={genre.id}
            className={`genre-item ${selectedGenre == genre.id ? 'active' : ''}`}
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
            type={type}
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
