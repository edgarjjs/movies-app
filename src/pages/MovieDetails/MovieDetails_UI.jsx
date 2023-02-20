import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../tools/getData";

import { MainDetails } from "./MainDetails";

import "./movie-details.css";
import { CardSlider_UI } from "../../components/CardSlider/CardSlider_UI";
import { ActorCard_UI } from "../../components/ActorCard/ActorCard_UI";
import { SeasonCard_UI } from "../../components/SeasonCard/SeasonCard_UI";
import { Footer } from "../../components/Footer/Footer";

export const MovieDetails_UI = () => {
  const [data, setData] = useState({});
  const [credits, setCredits] = useState([]);
  const [director, setDirector] = useState("");

  const { type, id } = useParams();

  useEffect(() => {
    getData(`/${type}/${id}`).then((res) => setData(res));
    getData(`/${type}/${id}/credits`).then((res) => {
      setCredits(res.cast);
      type === "movie" &&
        setDirector(res.crew.filter((e) => e.job == "Director")[0].name);
    });
  }, []);

  return (
    <>
      <MainDetails data={data} director={director} />

      <h3 className="actors-title">Actores principales</h3>
      <CardSlider_UI>
        {credits.map(
          (e, index) =>
            index < 15 && (
              <ActorCard_UI
                key={e.id}
                name={e.name}
                photo={e.profile_path ? e.profile_path : null}
                character={e.character}
                actorId={e.id}
              />
            )
        )}
      </CardSlider_UI>

      {type === "tv" && (
        <>
          <h3 className="seasons-title">Temporadas</h3>
          <CardSlider_UI bg_color={"black"}>
            {data.seasons &&
              data.seasons.map((e) => {
                  if (e.season_number > 0 && e.episode_count > 0) {
                    return (<SeasonCard_UI season={e} key={e.id} id={data.id} />)
                  }
              }
              )}
          </CardSlider_UI>
        </>
      )}
      <Footer />
    </>
  );
};
