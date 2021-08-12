import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledDateInfo,
  StyledParagraph,
  StyledList,
  StyledListItem,
} from './styles';

const Card = ({ cardType, title, created, content, id }) => {
  const slicedContentArr = content.split(',');
  const arrWithUniqueKey = slicedContentArr.map((item, index) => ({
    text: item,
    id: `${id}_${index}`,
  }));

  return (
    <StyledWrapper>
      <StyledInnerWrapper color={cardType.color}>
        <Heading>{title}</Heading>
        <StyledDateInfo>{created}</StyledDateInfo>
      </StyledInnerWrapper>
      <StyledInnerWrapper flex>
        {cardType.color === 'secondary' ? (
          <StyledList>
            {arrWithUniqueKey.map((item) => (
              <li key={item.id} id={`id${item.id}`}>
                <StyledListItem>{item.text}</StyledListItem>
              </li>
            ))}
          </StyledList>
        ) : (
          <StyledParagraph>{content}</StyledParagraph>
        )}
        <Button color="lightGrey" isSmall>
          remove
        </Button>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.objectOf(PropTypes.string.isRequired, PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
Card.defaultProps = {};

export default Card;
