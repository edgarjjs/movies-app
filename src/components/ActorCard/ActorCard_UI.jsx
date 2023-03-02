import { Link } from "react-router-dom";
import default_photo from '../../assets/default_photo.svg'
import "./actor-card.css";

export const ActorCard_UI = ({ name, character, photo, actorId }) => {
  const base_url = "https://image.tmdb.org/t/p/w185";

  return (
    <Link to={"/person/" + actorId}>
      <article className="actor-card-container">
        { photo ? (
          <img
            src={base_url + photo}
            className="actor-photo"
            alt="actor-photo"
          />
        ) : (
          <div className="empty-photo">
            <img src={default_photo} alt="empty-photo" />
          </div>
        )}
        <div className="actor-details-container">
          <h4 className="actor-name">{name}</h4>
          <p className="actor-rol">{character}</p>
        </div>
      </article>
    </Link>
  );
};
