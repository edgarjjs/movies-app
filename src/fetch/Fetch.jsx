import React, { useEffect, useState } from "react";
import { API_KEY } from "../key";
import "./fetch.css";

import poster from '../assets/poster.jpg'

export const Fetch = () => {

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/watch/providers/tv?api_key=${API_KEY}&languaje=es-MX&watch_region=MX`
    );
    const results = await response.json();
    const result = results.results
    // console.log(result);

    const data = result.map(e => console.log(e.provider_id, e.provider_name))
  };


  return (
    <>
      <h1 className="fetch-title">Probando respuestas de API</h1>
    </>
  );
};
