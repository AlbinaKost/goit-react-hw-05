import { useState } from "react";
import { Suspense, lazy } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import css from "./App.module.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

function App() {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassName}  to="/MovieDetailsPage">
            MovieDetails
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/NotFoundPage">
            NotFound
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/MoviesPage">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/MovieDetailsPage" element={<MovieDetailsPage />} />
            <Route path="/NotFoundPage" element={<NotFoundPage />} />
            <Route path="/MoviesPage" element={<MoviesPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
export default App;