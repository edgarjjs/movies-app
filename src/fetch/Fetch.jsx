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
      `https://api.themoviedb.org/3/tv/1399/season/1?api_key=${API_KEY}&language=es-MX`
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
