import { Route, Switch } from 'react-router-dom';
import { NavigationPaths } from './NavigationPaths';
import { Home } from '../../pages/Home';
import { Contact } from '../../pages/Contact';

export const Routing = () => (
  <Switch>
    <Route path={NavigationPaths.HOMEPAGE.path} exact>
      <Home />
    </Route>
    <Route path={NavigationPaths.CONTACT.path} exact>
      <Contact />
    </Route>
  </Switch>
);
