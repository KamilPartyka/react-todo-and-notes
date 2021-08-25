import styled from 'styled-components/macro';

const ButtonIcon = styled.button`
  display: block;
  width: 60px;
  height: 60px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  border: none;
  border-radius: 50%;
`;

export default ButtonIcon;
