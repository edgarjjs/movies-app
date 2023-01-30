import React, { useState } from "react";
import "../styles/actor-card.css";
import background from "../assets/background.jpg";
import { API_KEY } from "../key";

export const ActorCard = ({ name, character, photo }) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  console.log(name);
  return (
    <article className="actor-card-container">
      <img
        src={photo ? base_url + photo : null}
        className="actor-photo"
        alt="actor-photo"
      />
      <div className="actor-details-container">
        <h4 className="actor-name">{name}</h4>
        <p className="actor-rol">{character}</p>
      </div>
    </article>
  );
};
