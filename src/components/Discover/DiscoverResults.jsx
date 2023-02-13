import { MovieCard } from "../MovieCard/MovieCard";
import './discoverResults.css'

export const DiscoverResults = ({data, type}) => {
  return (
    <>
      <h2 className="filtered-genre-title">Resultados</h2>
      <section className="filtered-genre-container">
        {data.map((e) => (
          <MovieCard
            key={e.id}
            type={type}
            poster={e.poster_path}
            title={e.name ? e.name : e.title ? e.title : "Sin titulo"}
            first_air_date={e.first_air_date}
            release={e.release_date}
            movieID={e.id}
          />
        ))}
      </section>
    </>
  );
};
