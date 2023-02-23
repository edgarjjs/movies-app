import { useEffect, useRef, useState } from "react";
import { getData } from "../../tools/getData";
import { CarrouselCard } from "./CarrouselCard";
import arrow from "../../assets/back.png";

import "./carrousel.css";

export const Carrousel = ({ type, title, path }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [translatePorcent, setTranslatePorcent] = useState(0);

  useEffect(() => {
    getData(path, "&region=MX")
      .then((res) => {
        setData(res.results.filter((e, index) => index < 7))
      })
  }, []);

  const translate = { transform: `translateX(-${translatePorcent}%)` };

  const next = () => {
    setTranslatePorcent((prevState) => prevState >= 85.7142 ? 0 : prevState + 14.2857);
  };

  const prev = () => {
    setTranslatePorcent((prevState) => prevState == 0 ? 85.7142 : prevState - 14.2857);
  };

  return (
    <section className="main-carrousel-container">
      <div className="carrousel-container">
        <h2>{title}</h2>

        <div className="carrousel-card-container" style={translate}>
          {data.map((e) => 
                <CarrouselCard
                  type={type}
                  background={e.backdrop_path}
                  poster={e.poster_path}
                  title={e.title ? e.title : e.name ? e.name : "Sin datos"}
                  key={e.id}
                  id={e.id}
                />
          )}
        </div>

        <img src={arrow} alt="button-Prev" onClick={prev} className="prev" />
        <img src={arrow} alt="button-Next" onClick={next} className="next" />
      </div>
    </section>
  );
};
