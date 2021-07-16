import styled from 'styled-components';

export const StyledButton = styled.button`
  background: #e9c46a;
  border-radius: 50px;
  padding: 7px 60px;

  border: none;
  cursor: pointer;

  :hover {
    background-color: red;
  }

  :active {
    background-color: red;
  }

  font-weight: 600;
  font-size: 2.5rem;
  color: #264653;
  text-transform: uppercase;
`;
