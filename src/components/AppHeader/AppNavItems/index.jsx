import React, { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

import { NavContainer } from '../styles';

const AppNavItems = function () {
  const { signed, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout]);

  return (
    <NavContainer>
      {signed ? (<span>{`Olá, ${user.name}`}</span>) : (
        <span onClick={() => navigate('/login')} aria-hidden="true">Login</span>
      )}
      <span>Movies</span>
      <span>TV Shows</span>
      <span>More</span>
      {signed && (<span onClick={handleLogout} aria-hidden="true">Logout</span>)}
    </NavContainer>
  );
};

export default AppNavItems;
