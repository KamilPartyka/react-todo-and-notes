import styled, { css } from 'styled-components';
import search from 'assets/search.svg';

export const StyledInput = styled.input`
  padding: 1rem 2rem;
  font-size: 1.5rem;

  background: ${({ theme }) => theme.lightGrey};
  color: ${({ theme }) => theme.darkGrey};
  border-radius: 5rem;
  border: none;
  font-weight: ${({ theme }) => theme.bold};

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.darkGrey};
  }

  :focus {
    outline: none;
  }

  ${({ icon }) =>
    icon &&
    css`
      padding: 1rem 2rem 1rem 4rem;
      font-size: 1.3rem;
      background-image: url(${search});
      background-size: 2rem;
      background-position: 1rem 50%;
      background-repeat: no-repeat;
    `}
`;
