import { createContext, useState, useContext, useCallback } from 'react';

interface IsMobileContextData {
  toggleOpen(isOpen: boolean): void;
  open: boolean;
}

const IsMobileContext = createContext<IsMobileContextData>(
  {} as IsMobileContextData,
);

const IsMobileProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = useCallback((isOpen: boolean) => {
    setOpen(isOpen);
  }, []);

  return (
    <IsMobileContext.Provider value={{ toggleOpen, open }}>
      {children}
    </IsMobileContext.Provider>
  );
};

function useIsMobile(): IsMobileContextData {
  const context = useContext(IsMobileContext);

  if (!context) {
    throw new Error('useIsMobile must be used within an IsMobileProvider');
  }

  return context;
}

export { IsMobileProvider, useIsMobile };
