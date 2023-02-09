import React from "react";
import { Carrousel } from "../components/Carrousel/Carrousel";
import { Profile_UI } from "../components/Profile/Profile_UI";
import { Landing } from "./Landing";

export const Home = () => {
  return (
    <>
    <Profile_UI />
      {/* <Carrousel title="Peliculas en trending hoy" path="/trending/movie/day" />
      <Carrousel title="Peliculas Top" path="/movie/top_rated" /> */}
    </>
  );
};
