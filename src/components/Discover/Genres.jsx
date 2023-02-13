import './genres.css'

export const Genres = ({genres, selectedGenre, setSelectedGenre}) => {
  return (
    <>
      <div className="genres-list-container">
        <div
          className={`genre-item ${selectedGenre == 0 ? "active" : ""}`}
          onClick={() => setSelectedGenre(0)}
        >
          Todos
        </div>
        {genres.map((genre) => (
          <div
            key={genre.id}
            className={`genre-item ${
              selectedGenre == genre.id ? "active" : ""
            }`}
            onClick={() => setSelectedGenre(genre.id)}
          >
            {genre.name}
          </div>
        ))}
      </div>
    </>
  );
};
