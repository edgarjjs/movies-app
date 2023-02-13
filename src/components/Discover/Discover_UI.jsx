import { useEffect, useState } from "react";
import { getData } from "../../tools/getData";
import { DiscoverResults } from "./DiscoverResults";
import "./discover.css";
import { Genres } from "./Genres";

export const Discover_UI = ({ type }) => {
  const [genres, setGenres] = useState([]);
  const [data, setData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [watchProvider, setWatchProvider] = useState(0);

  useEffect(() => {

    getData(
      `/discover/${type}`,
      `${watchProvider ? `&with_watch_providers=${watchProvider}` : ''}${selectedGenre ? `&with_genres=${selectedGenre}` : ''}&watch_region=MX&sort_by=vote_count.desc`
    ).then((res) => setData(res.results));

  }, [type, selectedGenre, watchProvider]);

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

      {type == 'tv'
        ? (
          <section className="main-providers-container">
          <ul className="providers-container">
            <li
              className={`provider ${watchProvider == 0 ? "active" : ""}`}
              onClick={() => setWatchProvider(0)}
            >
              Todas
            </li>
  
            <li
              className={`provider ${watchProvider == 8 ? "active" : ""}`}
              onClick={() => setWatchProvider(8)}
            >
              Netflix
            </li>
  
            <li
              className={`provider ${watchProvider == 337 ? "active" : ""}`}
              onClick={() => setWatchProvider(337)}
            >
              Disney+
            </li>
  
            <li
              className={`provider ${watchProvider == 619 ? "active" : ""}`}
              onClick={() => setWatchProvider(619)}
            >
              Star+
            </li>
  
            <li
              className={`provider ${watchProvider == 531 ? "active" : ""}`}
              onClick={() => setWatchProvider(531)}
            >
              Paramout+
            </li>
          </ul>
        </section>
        ) : <></>
      }

      <DiscoverResults data={data} type={type} />
    </>
  );
};
