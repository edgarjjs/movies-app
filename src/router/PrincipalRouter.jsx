import React, { useState } from "react";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Main } from "../components/Main";
import { MovieDetails_UI } from "../components/MovieDetails/MovieDetails_UI";
import { Nav } from "../components/Nav";
import { Slider } from "../components/Slider";
import { Fetch } from "../components/Fetch";
import { Carrousel } from "../components/Carrousel/Carrousel";
import { Genres_UI } from "../components/Genres/Genres_UI";
import { Home } from "../pages/Home";

export const PrincipalRouter = () => {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Genres_UI />} />
        </Route>

        <Route path="/movie_details/:id" element={<MovieDetails_UI />} />
        <Route path="*" element={<h1>PÁGINA NO ENCONTRADA - ERROR 404</h1>} />
      </Routes>
    </HashRouter>
  );
};
