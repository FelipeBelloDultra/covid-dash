import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';
import Default from '../layouts/Default';

import Dashboard from '../pages/Dashboard';
import About from '../pages/About';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} layout={Default} />

      <Route path="/about" exact component={About} layout={Default} />

      <Redirect to="/dashboard" />
    </Switch>
  );
};

export default Routes;
