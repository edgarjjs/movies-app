import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../tools/getData";

import { MainDetails } from "./MainDetails";
import { ActorSlider_UI } from "../../components/ActorSlider/ActorSlider_UI";

import "./movie-details.css";

export const MovieDetails_UI = () => {
  const [data, setData] = useState({});
  const [credits, setCredits] = useState([]);
  const [director, setDirector] = useState("");

  const { type, id  } = useParams();

  useEffect(() => {

    getData(`/${type}/${id}`).then((res) => setData(res));
    getData(`/${type}/${id}/credits`)
      .then((res) => {
        setCredits(res.cast);
        type === 'movie' && setDirector(res.crew.filter((e) => e.job == "Director")[0].name)
      })

  }, []);

  return (
    <>
      <MainDetails data={data} director={director} />
      <ActorSlider_UI credits={credits}/>
    </>
  );
};
