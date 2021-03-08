import { createContext, useState, useContext, useCallback } from 'react';

import Loader from '../components/Loader';

interface LoaderContextData {
  toggleLoader(isOpen: boolean): void;
}

const LoaderContext = createContext<LoaderContextData>({} as LoaderContextData);

const LoaderProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleLoader = useCallback((isOpen: boolean) => {
    setOpen(isOpen);
  }, []);

  return (
    <LoaderContext.Provider value={{ toggleLoader }}>
      {children}
      <Loader active={open} />
    </LoaderContext.Provider>
  );
};

function useLoader(): LoaderContextData {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error('useLoader must be used within an LoaderProvider');
  }

  return context;
}

export { LoaderProvider, useLoader };
