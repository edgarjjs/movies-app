import React, { useEffect, useState } from "react";
import { API_KEY } from "../key";
import { MainDetails } from "../pages/MovieDetails/MainDetails";
import { ActorSlider_UI } from "./ActorSlider/ActorSlider_UI";
import { Carrousel } from "./Carrousel/Carrousel";
import { Fetch } from "./Fetch";
import { Slider } from "./Slider/Slider";

export const Home = () => {

  const watchProviderQuery =
    "&watch_region=MX&with_genres=10751|10759|35&with_watch_providers=";

  return (
    <>
      <Carrousel type='movie' title="Peliculas en trending hoy" path="/trending/movie/day" />
      {/* <Carrousel title="Series en trending hoy" path="/trending/tv/day" /> */}

      {/* <Slider
        type='tv'
        watchProvider="netflix"
        path="/discover/tv"
        query={`${watchProviderQuery}8`}
      />
      <Slider
        type='tv'
        watchProvider="disney"
        path="/discover/tv"
        query={`${watchProviderQuery}337`}
      />
      <Slider
        type='tv'
        watchProvider="hbo"
        path="/discover/tv"
        query={`${watchProviderQuery}384`}
      />
      <Slider
        type='tv'
        watchProvider="star"
        path="/discover/tv"
        query={`${watchProviderQuery}619`}
      />

      <Slider
        type='tv'
        watchProvider="paramount"
        path="/discover/tv"
        query={`${watchProviderQuery}531`}
      /> */}

      {/* <Fetch /> */}
    </>
  );
};
