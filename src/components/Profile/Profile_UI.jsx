import { useEffect, useState } from "react";
import { PersonDetails } from "./PersonDetails";
import { getData } from "../../tools/getData";
import { useParams } from "react-router-dom";
import { MovieCard } from "../MovieCard/MovieCard";

import "./profile.css";

export const Profile_UI = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    id && getData(`/person/${id}`, "&append_to_response=credits").then((e) =>
      setData(e)
    )
  }, []);

  return (
    <>
      <div className="main-profile-container">
        <PersonDetails
          birthDate={data.birthday}
          birthPlace={data.place_of_birth}
          gender={data.gender}
          popularity={data.popularity}
          name={data.name}
          role={data.known_for_department}
          photo={data.profile_path}
          deathday={data.deathday}
        />

        <section className="biography">
          <h2>Biografía</h2>
          <p>
            {data.biography
              ? data.biography
              : "No cuenta con una biografía disponible"}
          </p>
        </section>

        <section className="person-projects-container">
          <h2>Proyectos en los que ha trabajado</h2>

          <div className="projects-container">
            {data.credits ? data.credits.cast.sort((a, b) => b.popularity - a.popularity ).map((e, index) => (
              index < 10 &&

                <MovieCard
                  key={e.id}
                  poster={e.poster_path}
                  title={e.title}
                  release={e.release_date}
                  movieID={e.id}
                />
            )) : <></>}
          </div>

        </section>
      </div>
    </>
  );
};
