import { useEffect, useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import { useContextData } from "../../Hooks/useContextData";

import { getData } from "../../tools/getData";
import { DiscoverResults } from "./DiscoverResults";
import { Genres } from "./Genres";
import { Filter } from "../Filter/Filter";

import "./discover.css";

export const Discover_UI = () => {
  const [genres, setGenres] = useState([]);
  const [data, setData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(0);
  const { selectedProvider, setSelectedProvider } = useContextData();

  const { type } = useParams();

  useEffect(() => {
    getData(
      `/discover/${type}`,
      `${selectedProvider ? `&with_watch_providers=${selectedProvider}` : ""}${
        selectedGenre ? `&with_genres=${selectedGenre}` : ""
      }&watch_region=MX&sort_by=vote_count.desc`
    ).then((res) => setData(res.results));
  }, [type, selectedGenre, selectedProvider]);

  useEffect(() => {
    getData(`/genre/${type}/list`).then((res) => setGenres(res.genres));
  }, [type]);

  return (
    <>
      <ScrollRestoration />
      <Genres
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      {type && type == "tv" ? (
        <section className="filter-tv-container">
          <p className="filter-tv-title">Plataforma:</p>
          <Filter />
        </section>
      ) : (
        <></>
      )}

      <DiscoverResults data={data} type={type} />
    </>
  );
};
