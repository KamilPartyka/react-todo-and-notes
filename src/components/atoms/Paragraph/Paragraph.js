import styled from 'styled-components/macro';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.normal};
  margin: 0;
`;

export default Paragraph;
