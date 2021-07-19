import PropTypes from 'prop-types';
import { StyledLogo } from './styles';

const Logo = ({ small }) => <StyledLogo small={small}>T&N</StyledLogo>;

Logo.propTypes = {
  small: PropTypes.bool,
};

Logo.defaultProps = {
  small: false,
};

export default Logo;
