import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailsPage from 'views/DetailsPage';
import store from 'redux/store';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Todo from 'views/Todo';
import LoginPage from './LoginPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={() => <Redirect to={routes.todos} />} />
          <Route exact path={routes.todos} component={Todo} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route path={routes.todo} component={DetailsPage} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
