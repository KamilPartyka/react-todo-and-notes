import styled from 'styled-components';
import note from '../../../assets/note.svg';
import list from '../../../assets/list.svg';

export const StyledButtonMenu = styled.button`
  display: block;
  height: 6rem;
  width: 14rem;
  font-size: 2.3rem;
  background-color: transparent;
  border: none;
  font-weight: ${({ theme }) => theme.bold};
  position: relative;
  padding-left: 5.2rem;
  color: ${({ buttonType, theme }) => theme[buttonType.color]};
  cursor: pointer;

  ::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${({ buttonType }) => (buttonType.color === 'secondary' ? list : note)});
    background-size: 4.5rem 4.5rem;
    background-position: 0.5rem 50%;
    background-repeat: no-repeat;
    width: 6rem;
    height: 6rem;

    ${({ buttonType, theme }) =>
      buttonType.color === 'secondary' ? theme.secondaryFilter : theme.tertiaryFilter}
  }
`;
