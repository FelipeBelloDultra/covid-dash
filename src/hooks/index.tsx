import { CasesProvider } from './Cases';

const AppProvider: React.FC = ({ children }) => {
  return <CasesProvider>{children}</CasesProvider>;
};

export default AppProvider;
