import { useState } from 'react';
import './movie-details.css'

export const DetailsSummary = ({data, director}) => {

  const [buttonToggle, setButtonToggle] = useState(true);

  const toggle = () => {
    setButtonToggle(!buttonToggle);
  };


  return (

    <div className="details-summary">
    <ol>
      <li>
        <div>
          <h4>Fecha de lanzamiento</h4>
          <p>{data.release_date}</p>
        </div>
      </li>
      <li>
        <div>
          <h4>Duración:</h4>
          <p>{`${data.runtime}min`}</p>
        </div>
      </li>
      <li>
        <div>
          <h4>Director</h4>
          <p>{director}</p>
        </div>
      </li>
      <li className={`content ${buttonToggle && "hidden"}`}>
        <div>
          <h4>Estado</h4>
          <p>{data.status}</p>
        </div>
      </li>
      <li className={`content ${buttonToggle && "hidden"}`}>
        <div>
          <h4>Presupuesto</h4>
          <p>
            {data.budget
              ? `$${new Intl.NumberFormat().format(data.budget)}`
              : "Sin datos"}
          </p>
        </div>
      </li>
      <li className={`content ${buttonToggle && "hidden"}`}>
        <div>
          <h4>Recaudado</h4>
          <p>
            {data.budget
              ? `$${new Intl.NumberFormat().format(data.revenue)}`
              : "Sin datos"}
          </p>
        </div>
      </li>
    </ol>
    <button className="button-show-more" onClick={toggle}>
      {buttonToggle ? "Ver más" : "Ver menos"}
    </button>
    </div>

  )
}
