import React from "react";
import { Carrousel } from "../components/Carrousel/Carrousel";
import { Fetch } from "../components/Fetch";
import { Slider } from "../components/Slider/Slider";

export const Home = () => {
  const sliderFilters = "&watch_region=MX&with_genres=10751|10759|35";

  return (
    <>
      <Carrousel title="Peliculas en trending hoy" path="/trending/movie/day" />
      {/* <Carrousel title="Series en trending hoy" path="/trending/tv/day" /> */}

      <Slider
        watchProvider="Netflix"
        path="/discover/tv"
        query={`${sliderFilters}&with_watch_providers=8`}
      />
      <Slider
        watchProvider="DisneyPlus"
        path="/discover/tv"
        query={`${sliderFilters}&with_watch_providers=337`}
      />
      <Slider
        watchProvider="HBOMax"
        path="/discover/tv"
        query={`${sliderFilters}&with_watch_providers=384`}
      />
      <Slider
        watchProvider="StarPlus"
        path="/discover/tv"
        query={`${sliderFilters}&with_watch_providers=619`}
      />

      <Slider
        watchProvider="ParamountPlus"
        path="/discover/tv"
        query={`${sliderFilters}&with_watch_providers=531`}
      />
      {/* <Fetch /> */}
    </>
  );
};
