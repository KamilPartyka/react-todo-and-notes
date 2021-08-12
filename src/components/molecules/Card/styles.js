import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import plus from '../../../assets/plus.svg';

export const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  border: 1px solid rgba(244, 162, 97, 0.5);
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  overflow: hidden;
  min-height: 33rem;

  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

export const StyledInnerWrapper = styled.div`
  background: ${({ theme, color }) => theme[color]};
  box-shadow: 0px 4px 5px -4px rgba(0, 0, 0, 0.25);
  padding: 1.7rem 3rem;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

export const StyledDateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const StyledParagraph = styled(Paragraph)`
  padding-bottom: 1.5rem;
`;

export const StyledList = styled.ul`
  padding-bottom: 1.5rem;
  padding: 0;
  margin: 0;

  li {
    list-style: none;

    & .del {
      text-decoration: line-through;
    }
  }
`;

export const StyledListItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #aaa;
  margin: 0 0 1rem 0;
  position: relative;
  padding: 0.3rem;
  padding-right: 2rem;

  ${({ isDelete }) =>
    isDelete &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledDeleteIcon = styled.span`
  display: none;
  height: 2rem;
  width: 2rem;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);

  ${StyledListItem}:hover & {
    display: inline-block;
  }
`;
