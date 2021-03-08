import { Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '../hooks/Themes';

import Route from './Route';
import Default from '../layouts/Default';

import Dashboard from '../pages/Dashboard';
import About from '../pages/About';

const Routes: React.FC = () => {
  const { colors } = useTheme();

  return (
    <ThemeProvider theme={colors}>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} layout={Default} />

        <Route path="/about" exact component={About} layout={Default} />

        <Redirect to="/dashboard" />
      </Switch>
    </ThemeProvider>
  );
};

export default Routes;
