import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';
import PageContext from 'utils/context';

const StyledWrapper = styled.div`
  padding: 3rem;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(38rem, 1fr));
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
`;
const StyledPageHeader = styled.div`
  h2,
  p {
    margin: 1.5rem 0;
  }
`;
const StyledHeading = styled(Heading)`
  ::first-letter {
    text-transform: uppercase;
  }
`;

const GridTemplate = ({ children, numerOfItems }) => {
  const pageType = useContext(PageContext);
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="search" />
          <StyledHeading big>{pageType}</StyledHeading>
          <Paragraph>
            {numerOfItems} {pageType}
          </Paragraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  numerOfItems: PropTypes.number.isRequired,
};

export default GridTemplate;
