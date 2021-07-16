import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ title }) => (
  <div>
    <StyledButton type="button">{title}</StyledButton>
  </div>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
