import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />

      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
