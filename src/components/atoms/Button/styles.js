import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme, color }) => theme[color]};
  border-radius: 5rem;
  padding: 7px 6rem;

  border: none;
  cursor: pointer;

  font-weight: 600;
  font-size: 2.5rem;
  color: #264653;
  text-transform: uppercase;

  ${({ isSmall }) =>
    isSmall &&
    css`
      padding: 0.7rem 3rem;
      font-size: 1.3rem;
      max-width: 13rem;
    `}
`;
