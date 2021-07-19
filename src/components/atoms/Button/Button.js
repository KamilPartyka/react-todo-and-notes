import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ title, color }) => (
  <StyledButton color={color} type="button">
    {title}
  </StyledButton>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
