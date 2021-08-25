import PropTypes from 'prop-types';
import { StyledButton } from 'components/atoms/Button/styles';

const Button = ({ children, color, isSmall, ...props }) => (
  <StyledButton isSmall={isSmall} color={color} type="button" {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  color: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
};
Button.defaultProps = {
  isSmall: false,
};

export default Button;
