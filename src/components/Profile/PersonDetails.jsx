import birthdate_icon from "../../assets/birthdate.png";
import popularity_icon from "../../assets/popularity.png";
import men_icon from "../../assets/men.png";
import women_icon from "../../assets/women.png";
import map_icon from "../../assets/map.png";
import back_button from "../../assets/back.png";
import flowersRIP from "../../assets/deathday.png"
import empty_photo from "../../assets/default_photo.svg"
import { useNavigate } from "react-router-dom";

export const PersonDetails = ({
  name,
  role,
  birthDate,
  birthPlace,
  gender,
  popularity,
  photo,
  deathday,
}) => {
  const navigate = useNavigate();
  const base_url = "https://image.tmdb.org/t/p/original";

  return (
    <section className="person-details-container">
      <div
        className={`profile-photo ${photo? '' : 'empty'}`}
        style={photo ? { backgroundImage: `url(${base_url + photo})` } : { backgroundColor: 'black' }}
      >
        {photo ? '' : <img src={empty_photo} alt="empty-photo"></img>}
      </div>
      {deathday ? (
        <div className="deathday">
          <p>{`${new Date(birthDate).getFullYear()} - ${new Date(deathday).getFullYear()} `}</p>
          <img src={flowersRIP} alt="flowers"  className="flowers"/>
        </div>
      ) : (
        <></>
      )}
      <h2 className="person-name">{name ? name : 'Sin datos'}</h2>
      <p className="person-role">{role ? role : 'Sin datos'}</p>
      <div className="person-details">
        <div>
          <img src={birthdate_icon} className="birthdate-icon" />
          <strong>Fecha de nacimiento</strong>
          <p>{birthDate ? birthDate : 'Sin datos'}</p>
        </div>
        <div>
          <img src={map_icon} className="map-icon" />
          <strong>Lugar de nacimiento</strong>
          <p>{birthPlace ? birthPlace : 'Sin datos'}</p>
        </div>
        <div>
          <img
            src={gender == 1 ? women_icon : men_icon}
            className={gender == 1 ? "women-icon" : "men-icon"}
          />
          <strong>Género:</strong>
          <p>{gender ? gender == 1 ? "Mujer" : "Hombre" : 'Sin datos'}</p>
        </div>
        <div>
          <img src={popularity_icon} className="popularity-icon" />
          <strong>Popularidad</strong>
          <p>{popularity ? popularity.toFixed() + ' %' : 'Sin datos'}</p>
        </div>
      </div>
    </section>
  );
};
