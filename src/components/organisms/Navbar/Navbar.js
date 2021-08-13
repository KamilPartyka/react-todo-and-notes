import { NavLink } from 'react-router-dom';
import NavLinkButton from '../../atoms/NavLinkButton/NavLinkButton';
import Logo from '../../atoms/Logo/Logo';
import Logout from '../../atoms/Logout/Logout';
import { StyledWrapper, StyledInnerWrapper, StyledLinksList } from './styled';
import { TYPE } from '../../../utils/constants';
import { routes } from '../../../routes';

const Navbar = () => (
  <StyledWrapper>
    <NavLink exact to={routes.home}>
      <Logo isSmall />
    </NavLink>

    <StyledInnerWrapper>
      <StyledLinksList>
        <li>
          <NavLinkButton
            to={routes.todos}
            activeStyle={{
              backgroundColor: 'rgba(38, 70, 83, 0.55)',
            }}
            buttonType={TYPE.todos}
            text={TYPE.todos.text}
          />
        </li>
        <li>
          <NavLinkButton
            to={routes.notes}
            activeStyle={{
              backgroundColor: 'rgba(38, 70, 83, 0.55)',
            }}
            buttonType={TYPE.notes}
            text={TYPE.notes.text}
          />
        </li>
      </StyledLinksList>
      <NavLink exact to={routes.home}>
        <Logout />
      </NavLink>
    </StyledInnerWrapper>
  </StyledWrapper>
);
export default Navbar;
