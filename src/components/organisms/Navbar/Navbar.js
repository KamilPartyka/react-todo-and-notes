import { NavLink } from 'react-router-dom';
import NavLinkButton from 'components/atoms/NavLinkButton/NavLinkButton';
import Logo from 'components/atoms/Logo/Logo';
import Logout from 'components/atoms/Logout/Logout';
import { TYPE } from 'utils/constants';
import { routes } from 'routes';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledLinksList,
} from 'components/organisms/Navbar/styled';

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
      <NavLink exact to={routes.authenticate}>
        <Logout />
      </NavLink>
    </StyledInnerWrapper>
  </StyledWrapper>
);
export default Navbar;
