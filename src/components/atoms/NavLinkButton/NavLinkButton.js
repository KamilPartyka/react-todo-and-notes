import PropTypes from 'prop-types';
import { StyledNavLinkButton } from './styles';

const NavLinkButton = ({ text, buttonType, ...props }) => (
  <StyledNavLinkButton text={text} buttontype={buttonType} {...props}>
    {text}
  </StyledNavLinkButton>
);

NavLinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.objectOf(PropTypes.string.isRequired, PropTypes.string.isRequired)
    .isRequired,
};

export default NavLinkButton;
