import "../styles/actor-card.css";

export const ActorCard = ({ name, character, photo }) => {
  const base_url = "https://image.tmdb.org/t/p/w185";
  
  return (
    <article className="actor-card-container">
      {photo ? (
        <img src={base_url + photo} className="actor-photo" alt="actor-photo" />
      ) : (
        <div className="empty-photo">Sin foto de perfil</div>
      )}
      <div className="actor-details-container">
        <h4 className="actor-name">{name}</h4>
        <p className="actor-rol">{character}</p>
      </div>
    </article>
  );
};
