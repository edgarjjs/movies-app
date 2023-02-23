import { useState } from "react";
import "./movie-details.css";

export const DetailsSummary = ({ data, director }) => {
  const [buttonToggle, setButtonToggle] = useState(true);

  const toggle = () => {
    setButtonToggle(!buttonToggle);
  };

  return (
    <div className="details-summary">
      <ol>
        <li>
          <div>
            <h4>
              {data.release_date
                ? "Fecha de lanzamiento"
                : data.first_air_date
                ? "Primera emisión"
                : "Sin datos"}
            </h4>
            <p>
              {data.release_date
                ? data.release_date
                : data.first_air_date
                ? data.first_air_date
                : "Sin datos"}
            </p>
          </div>
        </li>
        <li>
          <div>
            <h4>
              {data.runtime
                ? "Duración:"
                : data.number_of_seasons
                ? "Temporadas"
                : "Sin datos"}
            </h4>
            <p>
              {data.runtime
                ? `${data.runtime}min`
                : data.number_of_seasons
                ? data.number_of_seasons
                : "Sin datos"}
            </p>
          </div>
        </li>
        <li>
          <div>
            <h4>
              {director
                ? "Director"
                : data.number_of_episodes
                ? "Episodios"
                : "Sin datos"}
            </h4>
            <p>
              {director
                ? director
                : data.number_of_episodes
                ? data.number_of_episodes
                : "Sin datos"}
            </p>
          </div>
        </li>

        {director ? (
          <>
            <li className={`content ${buttonToggle ? "hidden" : ""}`}>
              <div>
                <h4>Estado</h4>
                <p>{data.status}</p>
              </div>
            </li>

            <li className={`content ${buttonToggle ? "hidden" : ""}`}>
              <div>
                <h4>Presupuesto</h4>
                <p>
                  {data.budget
                    ? `$${new Intl.NumberFormat().format(data.budget)}`
                    : "Sin datos"}
                </p>
              </div>
            </li>

            <li className={`content ${buttonToggle ? "hidden" : ""}`}>
              <div>
                <h4>Recaudado</h4>
                <p>
                  {data.budget
                    ? `$${new Intl.NumberFormat().format(data.revenue)}`
                    : "Sin datos"}
                </p>
              </div>
            </li>
          </>
        ) : (
          <></>
        )}
      </ol>

      {director ? (
        <button className="button-show-more" onClick={toggle}>
          {buttonToggle ? "Ver más" : "Ver menos"}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
