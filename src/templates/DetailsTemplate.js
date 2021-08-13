import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';
import { routes } from '../routes';

const DetailsTemplate = ({ children }) => (
  <UserPageTemplate>
    {children}
    <Link to={routes.home}>go back</Link>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};
export default DetailsTemplate;
