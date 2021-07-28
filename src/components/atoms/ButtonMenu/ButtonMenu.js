import PropTypes from 'prop-types';
import { StyledButtonMenu } from './styles';

const ButtonMenu = ({ text, buttonText }) => (
  <StyledButtonMenu text={text} buttonText={buttonText}>
    {text}
  </StyledButtonMenu>
);

ButtonMenu.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.objectOf(PropTypes.string.isRequired, PropTypes.string.isRequired)
    .isRequired,
};

export default ButtonMenu;
