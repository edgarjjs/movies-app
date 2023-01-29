import React, { useState } from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Main } from "../components/Main";
import { MovieDetails } from "../components/MovieDetails";
import { Nav } from "../components/Nav";
import { Slider } from "../components/Slider";

export const PrincipalRouter = () => {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <BrowserRouter>
      <Landing showHeader={showHeader}>
        <Routes>
          <Route
            path="/"
            element={
              <Main>
                <Slider 
                  title="Peliculas en trending" 
                  path="/movie/upcoming"
                />
              </Main>
            }
          />
          <Route path="/movie_details/:id" element={<MovieDetails />} />
          <Route path="*" element={<h1>PÁGINA NO ENCONTRADA - ERROR 404</h1>} />
        </Routes>
      </Landing>
    </BrowserRouter>
  );
};
