import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../components/organisms/Navbar/Navbar';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 3rem;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
`;

const StyledPageHeader = styled.div`
  h2,
  p {
    margin: 1.5rem 0;
  }
`;

const UserPageTemplate = ({ children, pageType, numerOfItems }) => (
  <>
    <Navbar />
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
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.objectOf(PropTypes.string.isRequired, PropTypes.string.isRequired).isRequired,
  numerOfItems: PropTypes.number.isRequired,
};

export default UserPageTemplate;
