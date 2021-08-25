import styled from 'styled-components/macro';

export const StyledWrapper = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 0 1rem 0 3rem;
  height: 6rem;
  overflow: hidden;
  position: relative;
  z-index: 99;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding-left: 3rem;
  height: 6rem;
`;

export const StyledLinksList = styled.ul`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
`;
