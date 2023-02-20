import { NavLink } from "react-router-dom";
import "./navHeader.css";

export const NavHeader = () => {
  return (
    <>
      <ul className="nav-header-container">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Inicio
          </NavLink>
        </li>
        <li className="link">
          <NavLink
            to="/movie"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Películas
          </NavLink>
        </li>
        <li className="link">
          <NavLink
            to="/tv"
            className={({ isActive }) => (isActive ? "isActive" : "")}
          >
            Series
          </NavLink>
        </li>
      </ul>
    </>
  );
};
