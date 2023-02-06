import React, { useEffect, useState } from "react";
import { getData } from "../../tools/getData";

import bg from "../../assets/background.jpg";
import "./carrousel.css";
import { CarrouselCard } from "./CarrouselCard";

export const Carrousel = ({ title, path }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [translatePorcent, setTranslatePorcent] = useState(0);

  useEffect(() => {
    getData(path, "&region=MX").then((res) => {
      setData(res.results), setIsLoading(false);
    });
  }, []);

  return (
    <section className="carrousel-container">
      <h2>{title}</h2>

      <div className="carrousel">
        <div
          className="grande"
          style={{ transform: `translateX(-${translatePorcent}%)` }}
        >
          {data.map(
            (e, index) =>
              index < 5 && (
                <CarrouselCard
                  background={e.backdrop_path}
                  poster={e.poster_path}
                  title={e.title}
                  description={e.overview}
                  key={e.id}
                />
              )
          )}
        </div>

        <ul className="puntos">
          {data.map(
            (e, index) =>
              index < 5 && (
                <li
                  key={e.id}
                  onClick={() => setTranslatePorcent(index * 20)}
                  className={
                    translatePorcent == index || translatePorcent / index == 20
                      ? "punto activo"
                      : "punto"
                  }
                ></li>
              )
          )}
        </ul>
      </div>
    </section>
  );
};
