import PropTypes from 'prop-types';
import { StyledNavLinkButton } from 'components/atoms/NavLinkButton/styles';

const NavLinkButton = ({ text, pageType, ...props }) => (
  <StyledNavLinkButton text={text} pagetype={pageType} {...props}>
    {text}
  </StyledNavLinkButton>
);

NavLinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  pageType: PropTypes.objectOf(PropTypes.string.isRequired, PropTypes.string.isRequired).isRequired,
};

export default NavLinkButton;
