import { API_KEY } from "../key";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import "../styles/main.css";
import { Nav } from "./Nav";
import { Slider } from "./Slider";

export const Main = () => {
  // const getData = () => {
  //   fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY)
  //     .then(response => response.json())
  //     .then(json => setData(json.results))
  // }

  return (
    <main className="main-container">
      <Slider title='Peliculas en trending' path='/trending/movie/week'/>
      <Slider title='Descubre películas' path='/discover/movie'/>
      <Slider title='Series' path='/discover/tv'/>
    </main>
  );
};
