import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./asideMenu.css";

export const AsideMenu = ({ activeAside, setActiveAside }) => {

  const asideToggle = () => setActiveAside(!activeAside);

  return (
    <>

      <div
        className={`aside-container ${activeAside ? 'active-blur-aside' : ''}`}
        onClick={asideToggle}
      ></div>

      <div className={`ul-container ${activeAside ? 'active-aside' : ''}`}>
        <div className="aside-logo">
          <img src={logo} alt="" />
          <p>Movies App</p>
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={asideToggle}
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/movies"
              onClick={asideToggle}
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Películas
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="tv"
              onClick={asideToggle}
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Series
            </NavLink>
          </li>
          {/* <li className="link">
              <NavLink
                to="/categories"
                onClick={toggle}
                className={({isActive}) => isActive ? 'isActive' : ''}
              >
                Categorias
              </NavLink>
            </li> */}
        </ul>
      </div>
    </>
  );
};
