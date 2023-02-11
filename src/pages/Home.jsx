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
        watchProvider="netflix"
        path="/discover/tv"
        query={`${sliderFilters}&with_watch_providers=8`}
      />
      <Slider
        watchProvider="disney"
        path="/discover/tv"
        query={`${sliderFilters}&with_watch_providers=337`}
      />
      <Slider
        watchProvider="hbo"
        path="/discover/tv"
        query={`${sliderFilters}&with_watch_providers=384`}
      />
      <Slider
        watchProvider="star"
        path="/discover/tv"
        query={`${sliderFilters}&with_watch_providers=619`}
      />

      <Slider
        watchProvider="paramount"
        path="/discover/tv"
        query={`${sliderFilters}&with_watch_providers=531`}
      />
      {/* <Fetch /> */}
    </>
  );
};
