import React, { useContext, useState, useCallback } from 'react';

const ContextWrapper = React.createContext();
const ContextUpdaterWrapper = React.createContext();

export const useMoviesContext = () => {
  const contextValue = useContext(ContextWrapper);
  const contextUpdater = useContext(ContextUpdaterWrapper);

  return [contextValue, contextUpdater];
};

export const MoviesContext = function ({ children, initialValue = null }) {
  const [contextObj, setContextObj] = useState({ ...initialValue });

  const updateContextObj = useCallback((value) => {
    setContextObj({
      ...contextObj,
      ...value,
    });
  }, [contextObj, setContextObj]);

  return (
    <ContextWrapper.Provider value={contextObj}>
      <ContextUpdaterWrapper.Provider value={updateContextObj}>
        {children}
      </ContextUpdaterWrapper.Provider>
    </ContextWrapper.Provider>
  );
};

export default null;
