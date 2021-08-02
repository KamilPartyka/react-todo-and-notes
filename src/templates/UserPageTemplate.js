import PropTypes from 'prop-types';
import Navbar from '../components/organisms/Navbar/Navbar';

const UserPageTemplate = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
export default UserPageTemplate;
