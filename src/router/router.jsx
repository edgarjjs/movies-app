import { Landing } from "../pages/Landing";
import { Home } from "../components/Home/Home";
import { Discover_UI } from "../components/Discover/Discover_UI";
import { MovieDetails_UI } from "../pages/MovieDetails/MovieDetails_UI";
import { SeasonDetails_UI } from "../pages/SeasonDetails/SeasonDetails_UI";
import { Profile_UI } from "../components/Profile/Profile_UI";

import { createHashRouter } from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:type",
        element: <Discover_UI />,
      },
    ],
  },
  {
    path: "/details/:type/:id",
    element: <MovieDetails_UI />,
  },
  {
    path: "/details/tv/:id/season/:season",
    element: <SeasonDetails_UI />,
  },
  {
    path: "/person/:id",
    element: <Profile_UI />,
  },
  {
    path: "*",
    element: <h1>PÁGINA NO ENCONTRADA - ERROR 404</h1>,
  },
]);


export { router };
