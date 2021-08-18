import styled from 'styled-components';
import signOut from 'assets/signOut.svg';

export const StyledLogout = styled.span`
  display: inline-block;
  height: 5rem;
  width: 5rem;
  background-image: url(${signOut});
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(142deg) brightness(104%) contrast(103%);
`;
