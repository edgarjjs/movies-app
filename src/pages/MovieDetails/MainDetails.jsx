import { useNavigate } from "react-router-dom";
import { DetailsSummary } from "./DetailsSummary";

import "./movie-details.css";

export const MainDetails = ({ data, director }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="main-details-container">
        <div className="description">
          <h3>Descripción</h3>
          <p>{data.overview ? data.overview : 'No hay una descripción disponible'}</p>
        </div>

        <DetailsSummary data={data} director={director ? director : ""} />
      </section>
    </>
  );
};
