import styled from 'styled-components/macro';

const Heading = styled.h2`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};
  margin: 0;
`;

export default Heading;
