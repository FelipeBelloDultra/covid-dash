import { LoaderProvider } from './Loader';
import { CasesProvider } from './Cases';
import { ThemesProvider } from './Themes';

const AppProvider: React.FC = ({ children }) => {
  return (
    <LoaderProvider>
      <CasesProvider>
        <ThemesProvider>{children}</ThemesProvider>
      </CasesProvider>
    </LoaderProvider>
  );
};

export default AppProvider;
