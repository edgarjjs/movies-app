import React from "react";
import { Carrousel } from "../components/Carrousel/Carrousel";
import { Landing } from "./Landing";

export const Home = () => {
  return (
    <>
      <Carrousel title="Peliculas en trending hoy" path="/trending/movie/day" />
      <Carrousel title="Peliculas Top" path="/movie/top_rated" />
    </>
  );
};
