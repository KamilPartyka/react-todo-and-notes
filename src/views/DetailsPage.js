import { useState, useEffect } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import DetailsTemplate from '../templates/DetailsTemplate';
import { routes } from '../routes';

const DetailsPage = ({ match }) => {
  const [state, setState] = useState('');

  useEffect(() => {
    switch (match.path) {
      case routes.note:
        setState(routes.note);
        break;
      case routes.todo:
        setState(routes.todo);
        break;

      default:
        // eslint-disable-next-line no-console
        console.log('Error');
    }
  }, []);

  return (
    <DetailsTemplate>
      <p>{state}</p>
    </DetailsTemplate>
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
