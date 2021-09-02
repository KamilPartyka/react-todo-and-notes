import styled, { css } from 'styled-components/macro';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

export const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  border: 1px solid rgba(244, 162, 97, 0.5);
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  overflow: hidden;
  min-height: 36rem;
  max-width: 38rem;
  min-width: 30rem;
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
      max-height: 35rem;
      overflow-y: auto;
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
`;

export const StyledInsideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const StyledReadMore = styled(Paragraph)`
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
  margin: 0 1.5rem;
`;
