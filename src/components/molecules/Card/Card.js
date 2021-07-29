import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledDateInfo,
  StyledParagraph,
  StyledList,
} from './styles';

const todoListMockap = [
  {
    id: 1,
    post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    post: 'Suscipit nemo ducimus fuga repellendus illum',
  },
];

const Card = ({ cardType }) => (
  <StyledWrapper>
    <StyledInnerWrapper color={cardType.color}>
      <Heading>test heading</Heading>
      <StyledDateInfo>3 days</StyledDateInfo>
    </StyledInnerWrapper>
    <StyledInnerWrapper flex>
      {cardType.color === 'secondary' ? (
        <StyledList>
          {todoListMockap.map((item) => (
            <li key={item.id}>{item.post}</li>
          ))}
        </StyledList>
      ) : (
        <StyledParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo ducimus fuga
          repellendus illum
        </StyledParagraph>
      )}
      <Button color="lightGrey" isSmall>
        remove
      </Button>
    </StyledInnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.objectOf(PropTypes.string.isRequired, PropTypes.string.isRequired).isRequired,
};

export default Card;
