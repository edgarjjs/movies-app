import { useEffect, useRef, useState } from "react";
import { getData } from "../../tools/getData";
import { CarrouselCard } from "./CarrouselCard";
import arrow from "../../assets/back.png";

import "./carrousel.css";

export const Carrousel = ({ type, title, path }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [translatePorcent, setTranslatePorcent] = useState(0);

  useEffect(() => {
    getData(path, "&region=MX").then((res) => {
      setData(res.results);
      setIsLoading(false);
    });
  }, []);

  const translate = { transform: `translateX(-${translatePorcent}%)` };

  const next = () => {
    setTranslatePorcent((prevState) => (prevState == 80 ? 0 : prevState + 20));
  };

  const prev = () => {
    setTranslatePorcent((prevState) => (prevState == 0 ? 80 : prevState - 20));
  };

  return (
    <section className="main-carrousel-container">

      <div className="carrousel-container">
        <h2>{title}</h2>
        <img src={arrow} alt="button-Prev" onClick={prev} className="prev" />

        <div className="carrousel-card-container" style={translate}>
          {data.map(
            (e, index) =>
              index < 5 && (
                <CarrouselCard
                  type={type}
                  background={e.backdrop_path}
                  poster={e.poster_path}
                  title={e.title ? e.title : e.name ? e.name : "Sin datos"}
                  key={e.id}
                  id={e.id}
                />
              )
          )}
        </div>
        <img src={arrow} alt="button-Next" onClick={next} className="next" />
      </div>
      
    </section>
  );
};
