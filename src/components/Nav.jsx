import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

export const Nav = ({ menuToggle, setMenuToggle }) => {

  const toggle = () => setMenuToggle(!menuToggle);

  return (
    <aside className="aside-container">
      <div className="ul-container">
        <h3 className="page-name">Movies App</h3>
        <ul>
          <li className="link">
            <NavLink
              to="/home"
              onClick={toggle}
              className={({ isActive }) =>
                isActive ? "link isActive" : "link"
              }
            >
              Inicio
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/movies"
              onClick={toggle}
              className={({ isActive }) =>
                isActive ? "link isActive" : "link"
              }
            >
              Películas
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/series"
              onClick={toggle}
              className={({ isActive }) =>
                isActive ? "link isActive" : "link"
              }
            >
              Series
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/categories"
              onClick={toggle}
              className={({ isActive }) =>
                isActive ? "link isActive" : "link"
              }
            >
              Categorias
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className="aside-blur"
        onClick={toggle}
      ></div>
    </aside>
  );
};
