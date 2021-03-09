import { ToastProvider } from './Toast';
import { LoaderProvider } from './Loader';
import { CasesProvider } from './Cases';
import { ThemesProvider } from './Themes';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <LoaderProvider>
        <CasesProvider>
          <ThemesProvider>{children}</ThemesProvider>
        </CasesProvider>
      </LoaderProvider>
    </ToastProvider>
  );
};

export default AppProvider;
