import styled from 'styled-components';
import note from '../../../assets/note.svg';
import list from '../../../assets/list.svg';

export const StyledButtonMenu = styled.button`
  height: 5rem;
  width: 13rem;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  font-weight: ${({ theme }) => theme.bold};
  position: relative;
  padding-left: 4rem;
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
    background-size: 4rem;
    background-position: 0.5rem 50%;
    background-repeat: no-repeat;
    width: 5rem;
    height: 5rem;

    ${({ buttonType, theme }) =>
      buttonType.color === 'secondary' ? theme.secondaryFilter : theme.tertiaryFilter}
  }

  :active {
    background-color: rgba(38, 70, 83, 0.55);
  }
`;
