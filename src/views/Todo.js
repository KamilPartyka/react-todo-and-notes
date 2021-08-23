import { useSelector } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import { TYPE } from 'utils/constants';
import GridTemplate from 'templates/GridTemplate';

const Todo = () => {
  const storeTodos = useSelector((state) => state.todos);
  return (
    <GridTemplate numerOfItems={storeTodos.length}>
      <>
        {storeTodos.map((todo) => (
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
    </GridTemplate>
  );
};
export default Todo;
