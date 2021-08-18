import PropTypes from 'prop-types';

import Navbar from 'components/organisms/Navbar/Navbar';

const UserPageTemplate = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
