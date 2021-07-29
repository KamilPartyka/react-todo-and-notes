import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';

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
`;
