import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import { TYPE } from 'utils/constants';
import GridTemplate from 'templates/GridTemplate';
import { fetchItems } from 'redux/actions';

const Todo = () => {
  const storeTodos = useSelector((state) => state.rootReducer.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems('todos'));
  }, []);

  return (
    <GridTemplate numerOfItems={storeTodos ? storeTodos.length : 0}>
      <>
        {storeTodos &&
          storeTodos.map(({ _id: id, title, content }) => (
            <Card cardType={TYPE.todos} key={id} id={id} title={title} content={content} />
          ))}
      </>
    </GridTemplate>
  );
};
export default Todo;
