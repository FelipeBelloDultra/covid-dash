import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';
import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
