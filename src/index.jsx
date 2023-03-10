import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <SiteHeader />      {/* New Header  */}
      <Routes>
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
