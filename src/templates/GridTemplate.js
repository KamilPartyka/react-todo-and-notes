import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';
import PageContext from 'utils/context';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  padding: 3rem;
  position: relative;
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

const StyledButtonIcon = styled(ButtonIcon)`
  background-color: transparent;
  cursor: pointer;
  ${({ theme }) => theme.darkFilter};
  position: fixed;
  right: 4rem;
  bottom: 4rem;
`;

const GridTemplate = ({ children, numerOfItems }) => {
  const [isNewItemBarVisible, setIsNewItemBarVisible] = useState(false);
  const handleNewItemBar = () => setIsNewItemBarVisible(!isNewItemBarVisible);

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
        <StyledButtonIcon icon={plusIcon} onClick={handleNewItemBar} />
        <NewItemBar isVisible={isNewItemBarVisible} callbackFn={handleNewItemBar} />
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  numerOfItems: PropTypes.number.isRequired,
};

export default GridTemplate;
