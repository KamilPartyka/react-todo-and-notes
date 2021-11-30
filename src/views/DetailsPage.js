import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DetailsTemplate from 'templates/DetailsTemplate';
import PageContext from 'utils/context';
import PropTypes from 'prop-types';
import axios from 'axios';

const DetailsPage = ({ match }) => {
  const pageType = useContext(PageContext);
  const storeItems = useSelector((state) => state.rootReducer[pageType]);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    if (storeItems) {
      // eslint-disable-next-line no-underscore-dangle
      const [storeIdMatchItem] = storeItems.filter((item) => item._id === match.params.id);
      setActiveItem(storeIdMatchItem);
    } else {
      const itemId = match.params.id;
      axios
        .get(`http://localhost:9000/api/note/${itemId}`)
        .then(({ data }) => setActiveItem(data))
        .catch();
    }
  }, []);

  return <DetailsTemplate title={activeItem.title} content={activeItem.content} />;
};

DetailsPage.propTypes = {
  match: PropTypes.exact({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

DetailsPage.defaultProps = {
  match: null,
};

export default DetailsPage;
