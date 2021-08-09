import { NavLink } from 'react-router-dom';
import NavLinkButton from '../../atoms/NavLinkButton/NavLinkButton';
import Logo from '../../atoms/Logo/Logo';
import Logout from '../../atoms/Logout/Logout';
import { StyledWrapper, StyledInnerWrapper, StyledLinksList } from './styled';

const TYPE = {
  todos: {
    text: "ToDo's",
    color: 'secondary',
  },
  notes: {
    text: 'Notes',
    color: 'tertiary',
  },
};

const Navbar = () => (
  <StyledWrapper>
    <NavLink exact to="/">
      <Logo isSmall />
    </NavLink>

    <StyledInnerWrapper>
      <StyledLinksList>
        <li>
          <NavLinkButton
            exact
            to="/"
            activeStyle={{
              backgroundColor: 'rgba(38, 70, 83, 0.55)',
            }}
            buttonType={TYPE.todos}
            text={TYPE.todos.text}
          />
        </li>
        <li>
          <NavLinkButton
            to="/notes"
            activeStyle={{
              backgroundColor: 'rgba(38, 70, 83, 0.55)',
            }}
            buttonType={TYPE.notes}
            text={TYPE.notes.text}
          />
        </li>
      </StyledLinksList>
      <NavLink exact to="/">
        <Logout />
      </NavLink>
    </StyledInnerWrapper>
  </StyledWrapper>
);
export default Navbar;
