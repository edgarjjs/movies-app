import bg from "../../assets/background.jpg";

export const CarrouselCard = ({
  background,
  poster,
  title,
  description
}) => {
  const base_url = "https://image.tmdb.org/t/p/w300";

  return (
    <article className="carrousel-card-container">
      <img src={base_url + background} alt="" className="carrousel-card-background" />
      <div className="carrousel-movie-container">
        <img className="carrousel-movie-poster" src={base_url + poster} />
        <div className="carrousel-movie-details">
          <h3>{title}</h3>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
