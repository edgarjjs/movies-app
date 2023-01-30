import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../key";
import star from "../assets/star.png";

import "../styles/movie-details.css";
import { ActorCard } from "./ActorCard";

export const MovieDetails = () => {
  const [data, setData] = useState({});
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
    getCredits();
    // console.log(credits);
    // getImages();
  }, []);

  const base_url = "https://image.tmdb.org/t/p/original";

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es`
    );
    const data = await response.json();
    setData(data);
  };

  const getCredits = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=es`
    );
    const credits = await response.json();
    setCredits(credits.cast);
  };

  const buttonToggle = () => {
    let content = document.querySelectorAll(".content");
    let button_showMore = document.querySelector(".button-show-more");
    let button_showLess = document.querySelector(".button-show-less");

    if (content[0].classList.contains("hidden")) {
      [...content].map((item) => item.classList.remove("hidden"));
      button_showMore.classList.add("hidden");
      button_showLess.classList.remove("hidden");
    } else {
      [...content].map((item) => item.classList.add("hidden"));
      button_showMore.classList.remove("hidden");
      button_showLess.classList.add("hidden");
    }
  };

  // const getImages = async () => {
  //   const response = await fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}&language=es,null`
  //   );
  //   const data = await response.json();
  //   setImages(data.posters[0].file_path);
  //   console.log(data);
  // };

  return (
    <>
      <section className="main-details-container">
        <div className="backdrop-container">
          <div className="backdrop-gradient"></div>
          <img className="backdrop-image" src={base_url + data.backdrop_path} />
        </div>
        <div className="details-container">
          <div className="poster-container">
            <img className="poster-image" src={base_url + data.poster_path} />
            <div className="poster-aside">
              <h2>{data.title}</h2>
              <div className="poster-aside-info">
                <img src={star} alt="star-icon" />
                <p>
                  <strong>
                    {data.vote_average && data.vote_average.toFixed(1)}
                  </strong>
                  /10
                </p>
              </div>
            </div>
          </div>
          <div className="genres-container">
            <ul>
              {data.genres &&
                data.genres.map((genre) => (
                  <li key={genre.id} className="genre">
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="description">
            <h3>Descripción</h3>
            <p>{data.overview}</p>
          </div>
          <div className="details-summary">
            <ol>
              <li>
                <div>
                  <h4>Fecha de lanzamiento</h4>
                  <p>{data.release_date}</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Duración:</h4>
                  <p>{`${data.runtime}min`}</p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Director</h4>
                  <p>Stiven Spielberg</p>
                </div>
              </li>
              <li className="content hidden">
                <div>
                  <h4>Estado</h4>
                  <p>{data.status}</p>
                </div>
              </li>
              <li className="content hidden">
                <div>
                  <h4>Presupuesto</h4>
                  <p>
                    {data.budget
                      ? `$${new Intl.NumberFormat().format(data.budget)}`
                      : "Sin datos"}
                  </p>
                </div>
              </li>
              <li className="content hidden">
                <div>
                  <h4>Recaudado</h4>
                  <p>
                    {data.budget
                      ? `$${new Intl.NumberFormat().format(data.revenue)}`
                      : "Sin datos"}
                  </p>
                </div>
              </li>
            </ol>
            <button className="button-show-more" onClick={buttonToggle}>
              Ver más
            </button>
            <button className="button-show-less hidden" onClick={buttonToggle}>
              Ver menos
            </button>
          </div>
        </div>
      </section>
      <h3 className="title-actors-section">Actores principales</h3>
      <section className="main-actors-slider-content">
        <section className="actors-slider">
          {credits.map(
            (e, index) =>
              index < 10 && (
                <ActorCard
                  key={e.id}
                  name={e.name}
                  photo={e.profile_path}
                  character={e.character}
                />
              )
          )}
        </section>
      </section>
    </>
  );
};
