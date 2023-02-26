import { NavLink } from "react-router-dom";
import { useContextData } from "../../Hooks/useContextData";

import logo from "../../assets/logo.png";
import "./asideMenu.css";

export const AsideMenu = ({ activeAside, setActiveAside }) => {
  const { setSelectedProvider } = useContextData();
  const asideToggle = () => {
    setActiveAside(!activeAside);
  };

  return (
    <div
      className={`aside-container ${activeAside ? "active-blur-aside" : ""}`}
      onClick={asideToggle}
    >
      <aside className={`ul-container ${activeAside ? "active-aside" : ""}`}>
        <div className="aside-logo">
          <img src={logo} alt="" />
          <p>Movies App</p>
        </div>

        <ul>
          <p className="aside-title">Navega</p>
          <li>
            <NavLink
              to="/"
              onClick={asideToggle}
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Inicio
            </NavLink>
          </li>
        </ul>

        <ul>
          <p className="aside-title">Descubre</p>
          <li className="link">
            <NavLink
              to="/movie"
              onClick={asideToggle}
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Películas
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/tv"
              onClick={() => {
                setActiveAside(!activeAside);
                setSelectedProvider(0);
              }}
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Series
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};
