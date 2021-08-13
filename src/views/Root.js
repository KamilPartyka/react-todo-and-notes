import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Todo from './Todo';
import Notes from './Notes';
import DetailsPage from './DetailsPage';
import { routes } from '../routes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={() => <Redirect to={routes.todos} />} />
        <Route exact path={routes.todos} component={Todo} />
        <Route path={routes.todo} component={DetailsPage} />
        <Route exact path={routes.notes} component={Notes} />
        <Route path={routes.note} component={DetailsPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
