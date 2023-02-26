import react_logo from "../../assets/react.svg";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>MoviesApp Javier Jaimes &copy; - 2023</p>
      <p>Proyecto realizado en React</p>
      <div>
        <img src={react_logo} alt="react logo" />
      </div>
    </footer>
  );
};
