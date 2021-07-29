import styled from 'styled-components';

export const StyledLogo = styled.h1`
  font-family: 'Rock Salt';
  font-weight: 400;
  font-size: ${({ isSmall }) => (isSmall ? '35px' : '100px')};
  text-transform: uppercase;
`;
