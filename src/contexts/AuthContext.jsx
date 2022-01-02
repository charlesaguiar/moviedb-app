import React, {
  createContext, useState, useContext, useMemo,
} from 'react';

import AuthService from 'services/AuthService';

const AuthContext = createContext({});

export const AuthProvider = function ({ children }) {
  const [user, setUser] = useState(null);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const login = async (signIn) => {
    setLoadingLogin(true);
    const response = await AuthService.login(signIn);

    setUser(response.data.user);

    sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
    sessionStorage.setItem('@App:token', response.data.token);
    setLoadingLogin(false);
  };

  const logout = () => {
    sessionStorage.removeItem('@App:user');
    sessionStorage.removeItem('@App:token');
    setUser(null);
  };

  const contextValue = useMemo(() => ({
    signed: Boolean(user),
    user,
    loadingLogin,
    login,
    logout,
  }), [user, loadingLogin, login, logout]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default null;
