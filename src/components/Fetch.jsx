import React, { useEffect, useState } from "react";
import { API_KEY } from "../key";

export const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/615777/release_dates?api_key=${API_KEY}`
    )
    const data = await response.json();

  };

  return <div style={{ color: "#fff" }}>Probando respuestas de API</div>;
};