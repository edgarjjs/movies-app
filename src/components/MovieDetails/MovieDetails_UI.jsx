import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../tools/getData";

import { ActorCard } from "../ActorCard";
import { MainDetails } from "./MainDetails";

import "./movie-details.css";

export const MovieDetails_UI = () => {
  const [data, setData] = useState({});
  const [credits, setCredits] = useState([]);
  const [director, setDirector] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getData(`/movie/${id}`).then((res) => setData(res));

    getData(`/movie/${id}/credits`).then((res) => {
      setCredits(res.cast);
      setDirector(res.crew.filter((e) => e.job == "Director")[0].name);
    });
  }, []);

  return (
    <>
      <MainDetails data={data} director={director} />

      <h3 className="title-actors-section">Actores principales</h3>
      <section className="main-actors-slider-content">
        <div className="actors-slider">
          {credits.map(
            (e, index) =>
              index < 15 && (
                <ActorCard
                  key={e.id}
                  name={e.name}
                  photo={e.profile_path}
                  character={e.character}
                />
              )
          )}
        </div>
      </section>
    </>
  );
};
