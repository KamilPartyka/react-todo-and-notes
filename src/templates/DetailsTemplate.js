import { useContext } from 'react';
import PageContext from 'utils/context';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { TYPE } from 'utils/constants';
import UserPageTemplate from 'templates/UserPageTemplate';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 2.5rem 0 5rem 0;
`;

const StyledHeading = styled(Heading)`
  margin: 2.5rem 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledCreated = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;
const StyledParagraph = styled(Paragraph)`
  margin: 3rem 0;
`;

const DetailsTemplate = ({ title, created, content }) => {
  const pageType = useContext(PageContext);

  const history = useHistory();
  const handleButtonClick = () =>
    history.push(pageType === TYPE.todos.name ? TYPE.todos.link : TYPE.notes.link);

  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <StyledHeading big>{title}</StyledHeading>
          <StyledCreated>{created}</StyledCreated>
        </StyledPageHeader>
        <StyledParagraph>{content}</StyledParagraph>
        <Button onClick={handleButtonClick} color={TYPE[pageType].color}>
          save / close
        </Button>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

DetailsTemplate.propTypes = {
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
};

export default DetailsTemplate;
