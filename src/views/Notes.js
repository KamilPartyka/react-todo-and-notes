import { useSelector } from 'react-redux';
import { TYPE } from 'utils/constants';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Notes = () => {
  const storeNotes = useSelector((state) => state.notes);

  return (
    <GridTemplate numerOfItems={storeNotes.length}>
      <>
        {storeNotes.map((note) => (
          <Card
            cardType={TYPE.notes}
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            created={note.created}
          />
        ))}
      </>
    </GridTemplate>
  );
};

export default Notes;
