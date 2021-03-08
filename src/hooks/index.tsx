import { CasesProvider } from './Cases';
import { ThemesProvider } from './Themes';

const AppProvider: React.FC = ({ children }) => {
  return (
    <CasesProvider>
      <ThemesProvider>{children}</ThemesProvider>
    </CasesProvider>
  );
};

export default AppProvider;
