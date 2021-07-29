import PropTypes from 'prop-types';
import { StyledLogo } from './styles';

const Logo = ({ isSmall }) => <StyledLogo isSmall={isSmall}>T&N</StyledLogo>;

Logo.propTypes = {
  isSmall: PropTypes.bool,
};

Logo.defaultProps = {
  isSmall: false,
};

export default Logo;
