import styled from 'styled-components/macro';

export const StyledLogo = styled.h1`
  font-family: 'Rock Salt';
  font-weight: 400;
  font-size: ${({ isSmall }) => (isSmall ? '3.5rem' : '10rem')};
  text-transform: uppercase;
  display: inline-block;
  color: ${({ theme }) => theme.white};
  margin: 0;
  cursor: pointer;
`;
