import React from "react";
import ReactDOM from "react-dom/client";
import { PrincipalRouter } from "./router/PrincipalRouter";

import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { ContextDataProvider } from "./contexts/ContextDataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(

  <ContextDataProvider>
    <RouterProvider router={router} />
  </ContextDataProvider>
  // <PrincipalRouter/>
);
