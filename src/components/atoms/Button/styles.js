import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme, color }) => theme[color]};
  border-radius: 50px;
  padding: 7px 60px;

  border: none;
  cursor: pointer;

  font-weight: 600;
  font-size: 2.5rem;
  color: #264653;
  text-transform: uppercase;
`;
