import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Todo from './Todo';
import Notes from './Notes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route path="/notes" component={Notes} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
