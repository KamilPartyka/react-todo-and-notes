import { NavLink } from 'react-router-dom';
import ButtonMenu from '../../atoms/ButtonMenu/ButtonMenu';
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
  // const history = useHistory();
  // const navLinkHandler = (address) => {
  //   history.push(address);
  // };

  <StyledWrapper>
    <NavLink exact to="/">
      <Logo isSmall />
    </NavLink>

    <StyledInnerWrapper>
      <StyledLinksList>
        <li>
          <ButtonMenu
            exact
            to="/"
            activeStyle={{
              backgroundColor: 'rgba(38, 70, 83, 0.55)',
            }}
            as={NavLink}
            buttonType={TYPE.todos}
            text={TYPE.todos.text}
          />
        </li>
        <li>
          <ButtonMenu
            to="/notes"
            activeStyle={{
              backgroundColor: 'rgba(38, 70, 83, 0.55)',
            }}
            as={NavLink}
            buttonType={TYPE.notes}
            text={TYPE.notes.text}
          />
        </li>
        {/* <li>
          <ButtonMenu
            buttonType={TYPE.notes}
            text={TYPE.notes.text}
            // callbackFn={() => navLinkHandler('/notes')}
          />
        </li> */}
      </StyledLinksList>
      <Logout exact to="/" />
    </StyledInnerWrapper>
  </StyledWrapper>
);
export default Navbar;
