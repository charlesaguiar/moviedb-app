import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { AuthProvider } from 'contexts/AuthContext';

import AppHeader from 'components/AppHeader';
import HomePage from 'pages/Home';
import MovieDetailsPage from 'pages/MovieDetails';
import LoginPage from 'pages/Login';
import PasswordRecoveryPage from 'pages/PasswordRecovery';
import RegistrationPage from 'pages/Registration';

const App = function () {
  return (
    <AuthProvider>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movie/:movieId" element={<MovieDetailsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="password_recovery" element={<PasswordRecoveryPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
