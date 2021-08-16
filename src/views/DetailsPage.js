import { useState, useEffect } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import DetailsTemplate from '../templates/DetailsTemplate';
import { routes } from '../routes';
import { TYPE } from '../utils/constants';

const dummyArticle = {
  id: 1,
  title: 'Wake me up when Vue ends',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  created: '1 day',
};

const DetailsPage = ({ match }) => {
  const [state, setState] = useState('');

  useEffect(() => {
    if (match.path === routes.note) {
      setState(TYPE.notes.color);
    }
    if (match.path === routes.todo) {
      setState(TYPE.todos.color);
    }
  }, []);

  return (
    <DetailsTemplate
      pageType={state}
      title={dummyArticle.title}
      created={dummyArticle.created}
      content={dummyArticle.content}
    />
  );
};
DetailsPage.propTypes = {
  match: oneOfType([
    PropTypes.string,
    PropTypes.shape({
      params: PropTypes.shape({
        patch: PropTypes.string,
      }),
    }),
  ]).isRequired,
};

export default DetailsPage;
