import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import note from '../../../assets/note.svg';
import list from '../../../assets/list.svg';

export const StyledNavLinkButton = styled(NavLink)`
  display: inline-block;
  height: 6rem;
  width: 14rem;
  font-size: 2.3rem;
  background-color: transparent;
  border: none;
  font-weight: ${({ theme }) => theme.bold};
  position: relative;
  padding-left: 5.3rem;
  padding-top: 1.5rem;
  color: ${({ buttontype, theme }) => theme[buttontype.color]};
  cursor: pointer;
  text-decoration-line: none;

  ::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${({ buttontype }) => (buttontype.color === 'secondary' ? list : note)});
    background-size: 4.5rem 4.5rem;
    background-position: 0.5rem 50%;
    background-repeat: no-repeat;
    width: 6rem;
    height: 6rem;

    ${({ buttontype, theme }) =>
      buttontype.color === 'secondary' ? theme.secondaryFilter : theme.tertiaryFilter}
  }
`;
