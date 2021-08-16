import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ children, color, isSmall, ...props }) => (
  <StyledButton isSmall={isSmall} color={color} type="button" {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
};
Button.defaultProps = {
  isSmall: false,
};

export default Button;
