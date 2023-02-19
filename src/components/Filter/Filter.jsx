import DisneyPlus from "../../assets/watchProviders/DisneyPlus.svg";
import globe from "../../assets/Globe_icon.svg";

import { getData } from "../../tools/getData";
import { useEffect, useState } from "react";
import "./filter.css";

export const Filter = ({ selectedProvider, setSelectedProvider }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isFilterHover, setIsFilterHover] = useState(false);
  const [providers, setProviders] = useState([]);

  const filterProvidersId = [0, 8, 119, 337, 167, 531, 384, 619, 350, 283, 339];

  useEffect(() => {
    getData("/watch/providers/tv", "&watch_region=MX").then((res) =>
      setProviders(
        res.results.filter((e) => filterProvidersId.includes(e.provider_id))
      )
    );
  }, []);

  const handleClickInput = (id) => {
    setSelectedProvider(id);
    setIsFilterOpen(false);
    setIsFilterHover(false);
  };

  const handleClickFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleMouseLeaveFilter = () => {
    setTimeout(() => {
      setIsFilterHover((prevState) => !prevState && setIsFilterOpen(false));
    }, 5000);
  };

  const handleMouseLeaveDatalist = () => {
    setIsFilterHover(false);
    setTimeout(() => setIsFilterOpen(false), 1000);
  };

  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <div
        className={`datalist-container ${
          isFilterOpen ? "active-datalist" : ""
        }`}
      >
        {providers && selectedProvider === 0 ? (
          <article
            className="selected-option"
            onClick={handleClickFilter}
            onMouseLeave={handleMouseLeaveFilter}
          >
            <img src={globe} alt={`icono global`} />
            <p>Todas</p>
          </article>
        ) : (
          providers
            .filter((e) => e.provider_id === selectedProvider)
            .map((e) => (
              <article
                key={e.provider_id}
                className="selected-option"
                onClick={handleClickFilter}
                onMouseLeave={handleMouseLeaveFilter}
              >
                <img
                  src={base_url + e.logo_path}
                  alt={`Logo de ${e.provider_name}`}
                />
                <p>{e.provider_name}</p>
              </article>
            ))
        )}

        <div
          className={`datalist ${isFilterOpen ? "active-datalist" : ""}`}
          onMouseEnter={() => setIsFilterHover(true)}
          onMouseLeave={handleMouseLeaveDatalist}
        >
          <article className="input" onClick={() => handleClickInput(0)}>
            <img src={globe} alt={`icono global`} />
            <p>Todas</p>
          </article>

          {providers &&
            providers.map((e) => (
              <article
                className="input"
                key={e.provider_id}
                onClick={() => handleClickInput(e.provider_id)}
              >
                <img
                  src={base_url + e.logo_path}
                  alt={`Logo de ${e.provider_name}`}
                />
                <p>{e.provider_name}</p>
              </article>
            ))}
        </div>
      </div>
    </>
  );
};
