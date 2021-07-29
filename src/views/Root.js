import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Button from '../components/atoms/Button/Button';
import Logo from '../components/atoms/Logo/Logo';
import Input from '../components/atoms/Input/Input';
import ButtonMenu from '../components/atoms/ButtonMenu/ButtonMenu';
import Card from '../components/molecules/Card/Card';
import MainTemplate from '../templates/MainTemplate';
import Todo from './Todo';
import Notes from './Notes';

const TYPE = {
  todos: {
    text: "ToDo's",
    color: 'secondary',
  },
  notes: {
    text: 'Notes',
    color: 'tertiary',
  },
};

const Root = () => (
  <MainTemplate>
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Todo} />
          <Route path="/notes" component={Notes} />
        </Switch>
      </BrowserRouter>
      <h1>Hello World</h1>
      <Logo isSmall />
      <Button small color="secondary">
        close
      </Button>
      <Button color="tertiary">REGISTER</Button>
      <br /> <br />
      <Input search />
      <Input />
      <br /> <br />
      <ButtonMenu buttonType={TYPE.todos} text={TYPE.todos.text} />
      <ButtonMenu buttonType={TYPE.notes} text={TYPE.notes.text} />
      <br /> <br />
      <Card cardType={TYPE.todos} />
      <Card cardType={TYPE.notes} />
    </>
  </MainTemplate>
);

export default Root;
