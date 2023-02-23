import React from "react";
import ReactDOM from "react-dom/client";
import { PrincipalRouter } from "./router/PrincipalRouter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrincipalRouter/>
  </React.StrictMode>
);
