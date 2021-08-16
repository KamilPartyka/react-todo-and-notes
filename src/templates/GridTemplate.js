import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
  padding: 3rem;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(39rem, 1fr));
  grid-gap: 2rem;
`;
const StyledPageHeader = styled.div`
  h2,
  p {
    margin: 1.5rem 0;
  }
`;

const GridTemplate = ({ children, pageType, numerOfItems }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="search" />
        <Heading big>{pageType.text}</Heading>
        <Paragraph>
          {numerOfItems} {pageType.text}
        </Paragraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.objectOf(PropTypes.string.isRequired, PropTypes.string.isRequired).isRequired,
  numerOfItems: PropTypes.number.isRequired,
};

export default GridTemplate;
