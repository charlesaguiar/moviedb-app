import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import AppHeader from 'components/AppHeader';
import HomePage from 'pages/Home';
import MovieDetailsPage from 'pages/MovieDetails';

const App = function () {
  return (
    <>
      <AppHeader />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movie/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
