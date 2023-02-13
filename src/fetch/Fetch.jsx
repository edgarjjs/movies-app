import React, { useEffect, useState } from "react";
import { API_KEY } from "../key";
import "./fetch.css";

import poster from '../assets/poster.jpg'

export const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&watch_region=MX&with_watch_providers=8&language=es-MX`
    );
    const result = await response.json();
    setData(result);
    console.log(data);
  };


  return (
    <>
      <h1 className="fetch-title">Probando respuestas de API</h1>
    </>
  );
};
