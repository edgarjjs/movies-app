import { useState, useEffect } from "react";
import { API_KEY } from "../key";
import { MovieCard } from "./MovieCard";
import "../styles/tv.css";

export const Tv = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=" +
        API_KEY +
        "&language=es"
    );
    const data_JSON = await response.json();
    setData(data_JSON.results);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data)

  return (
    <div>
      
    </div>
  );
};
