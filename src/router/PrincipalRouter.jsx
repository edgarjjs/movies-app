import { useState } from "react";
import { Routes, Route, HashRouter, ScrollRestoration } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { MovieDetails_UI } from "../pages/MovieDetails/MovieDetails_UI";
import { Discover_UI } from "../components/Discover/Discover_UI";
import { Home } from "../components/Home/Home";
import { Profile_UI } from "../components/Profile/Profile_UI";
import { SeasonDetails_UI } from "../pages/SeasonDetails/SeasonDetails_UI";
import { createHashRouter } from "react-router-dom";

export const PrincipalRouter = () => {
  const [provider, setProvider] = useState(0);

    return (
      <HashRouter>
          <Routes>
            <Route path="/" element={<Landing setProvider={setProvider} />} >
              <Route path="/" element={<Home setProvider={setProvider} />} />
              <Route
                path="/:type"
                element={<Discover_UI provider={provider} />}
              />
            </Route>

            <Route path="/details/:type/:id" element={<MovieDetails_UI />} />
            <Route
              path="/details/tv/:id/season/:season"
              element={<SeasonDetails_UI />}
            />
            <Route path="/person/:id" element={<Profile_UI />} />
            <Route path="*" element={<h1>PÁGINA NO ENCONTRADA - ERROR 404</h1>} />
          </Routes>
      </HashRouter>
    );
  };
