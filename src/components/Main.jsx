import { API_KEY } from "../key";
import { Children, useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
// import "../styles/main.css";
import { Nav } from "./Nav";
import { Slider } from "./Slider";
import { Outlet } from "react-router-dom";

export const Main = ({Children}) => {
  // const getData = () => {
  //   fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY)
  //     .then(response => response.json())
  //     .then(json => setData(json.results))
  // }

  return (
    <main className="main-container">
      {Children}
      {/* <Slider title='Descubre películas' path='/discover/movie'/>
      <Slider title='Series' path='/discover/tv'/> */}
    </main>
  );
};
