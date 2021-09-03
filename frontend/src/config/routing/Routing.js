import { Route, Switch } from 'react-router-dom';
import { NavigationPaths } from './NavigationPaths';
import { Home } from '../../pages/Home';
import { Contact } from '../../pages/Contact';
import { Events } from '../../pages/Events';
import { Groups } from '../../pages/Groups';
import { Challenges } from '../../pages/Challenges';

export const Routing = () => (
  <>
    <Switch>
      <Route path={NavigationPaths.HOMEPAGE.path} exact>
        <Home />
      </Route>
      <Route path={NavigationPaths.EVENTS.path} exact>
        <Events />
      </Route>
      <Route path={NavigationPaths.GROUPS.path} exact>
        <Groups />
      </Route>
      <Route path={NavigationPaths.CHALLENGES.path} exact>
        <Challenges />
      </Route>
      <Route path={NavigationPaths.CONTACT.path} exact>
        <Contact />
      </Route>
    </Switch>
  </>
);
