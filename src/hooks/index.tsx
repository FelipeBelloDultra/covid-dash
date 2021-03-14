import { ToastProvider } from './Toast';
import { LoaderProvider } from './Loader';
import { CasesProvider } from './Cases';
import { ThemesProvider } from './Themes';
import { IsMobileProvider } from './IsMobile';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <LoaderProvider>
        <CasesProvider>
          <IsMobileProvider>
            <ThemesProvider>{children}</ThemesProvider>
          </IsMobileProvider>
        </CasesProvider>
      </LoaderProvider>
    </ToastProvider>
  );
};

export default AppProvider;
