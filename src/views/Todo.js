import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
import { TYPE } from '../utils/constants';

const todos = [
  {
    id: 1,
    title: 'React on my mind',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Wish you React',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit, Delectus tempora quibusdam natus, modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 3,
    title: 'You gave React a bad name',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing, Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
  },
  {
    id: 4,
    title: 'Is it React you looking for?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
  },
];

const Todo = () => (
  <UserPageTemplate pageType={TYPE.todos} numerOfItems={todos.length}>
    <>
      {todos.map((todo) => (
        <Card
          cardType={TYPE.todos}
          key={todo.id}
          id={todo.id}
          title={todo.title}
          content={todo.content}
          created={todo.created}
        />
      ))}
    </>
  </UserPageTemplate>
);

export default Todo;
