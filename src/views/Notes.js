import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TYPE } from 'utils/constants';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { fetchItems } from 'redux/actions';

const Notes = () => {
  const storeNotes = useSelector((state) => state.rootReducer.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems('notes'));
  }, []);

  return (
    <GridTemplate numerOfItems={storeNotes ? storeNotes.length : 0}>
      <>
        {storeNotes &&
          storeNotes.map(({ _id: id, title, content }) => (
            <Card cardType={TYPE.notes} key={id} id={id} title={title} content={content} />
          ))}
      </>
    </GridTemplate>
  );
};

export default Notes;
