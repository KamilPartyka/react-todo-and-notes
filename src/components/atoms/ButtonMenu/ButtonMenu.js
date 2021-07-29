import PropTypes from 'prop-types';
import { StyledButtonMenu } from './styles';

const ButtonMenu = ({ text, buttonType }) => (
  <StyledButtonMenu text={text} buttonType={buttonType}>
    {text}
  </StyledButtonMenu>
);

ButtonMenu.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.objectOf(PropTypes.string.isRequired, PropTypes.string.isRequired)
    .isRequired,
};

export default ButtonMenu;
