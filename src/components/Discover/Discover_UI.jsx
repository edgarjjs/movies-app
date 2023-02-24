import { useEffect, useState } from "react";
import { getData } from "../../tools/getData";
import { DiscoverResults } from "./DiscoverResults";
import "./discover.css";
import { Genres } from "./Genres";
import { Filter } from "../Filter/Filter";
import { useParams } from "react-router-dom";

export const Discover_UI = ({ provider }) => {
  const [genres, setGenres] = useState([]);
  const [data, setData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [selectedProvider, setSelectedProvider] = useState(provider);

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
      <Genres
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      {type && type == "tv" ? (
        <section className="filter-tv-container">
          <p className="filter-tv-title">Plataforma:</p>
          <Filter
            selectedProvider={selectedProvider}
            setSelectedProvider={setSelectedProvider}
          />
        </section>
      ) : (
        <></>
      )}

      <DiscoverResults data={data} type={type} />
    </>
  );
};
