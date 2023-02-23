import { useNavigate } from "react-router-dom";
import arrow from '../../assets/arrow.svg'
import "./backButton.css";

export const BackButton = () => {

  const navigate = useNavigate()

  return (
    <div className="back-button-component">
      <img src={arrow} alt="back-button-component" onClick={() => navigate(-1)} />
    </div>
  );
};
