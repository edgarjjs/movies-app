import React, { useState } from "react";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { MovieDetails_UI } from "../pages/MovieDetails/MovieDetails_UI";
import { Nav } from "../components/Nav";
import { Fetch } from "../fetch/Fetch";
import { Carrousel } from "../components/Carrousel/Carrousel";
import { Genres_UI } from "../components/Genres/Genres_UI";
import { Home } from "../components/Home";
import { Profile_UI } from "../components/Profile/Profile_UI";
import { SeasonDetails_UI } from "../pages/SeasonDetails/SeasonDetails_UI";

export const PrincipalRouter = () => {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Genres_UI type='movie'/>} />
          <Route path="tv" element={<Genres_UI type='tv'/>} />
        </Route>

        <Route path="/details/:type/:id" element={<MovieDetails_UI />} />
        <Route path="/details/tv/:id/season/:season" element={<SeasonDetails_UI />} />
        <Route path="/person/:id" element={<Profile_UI />} />
        <Route path="*" element={<h1>PÁGINA NO ENCONTRADA - ERROR 404</h1>} />
      </Routes>
    </HashRouter>
  );
};
