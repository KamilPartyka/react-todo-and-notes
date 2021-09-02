import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItem } from 'redux/actions';
import { TYPE } from 'utils/constants';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledDateInfo,
  StyledParagraph,
  StyledList,
  StyledListItem,
  StyledReadMore,
  StyledInsideWrapper,
} from 'components/molecules/Card/styles';

const Card = ({ cardType, title, created, content, id }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const handleReadMoreClick = () => setState(true);
  const handleRemove = () => dispatch(removeItem(cardType.name, id));

  if (state) {
    return <Redirect to={`${cardType.link}/${id}`} />;
  }

  return (
    <StyledWrapper>
      <StyledInnerWrapper color={cardType.color}>
        <Heading>{title}</Heading>
        <StyledDateInfo>{created}</StyledDateInfo>
      </StyledInnerWrapper>
      <StyledInnerWrapper flex>
        {cardType.name === TYPE.todos.name ? (
          <StyledList>
            {content
              .map((item, index) => ({
                text: item,
                id: `${id}_${index}`,
              }))
              .map((item) => (
                <li key={item.id} id={`id${item.id}`}>
                  <StyledListItem>{item.text}</StyledListItem>
                </li>
              ))}
          </StyledList>
        ) : (
          <StyledParagraph>{content}</StyledParagraph>
        )}
        <StyledInsideWrapper>
          <Button color="lightGrey" isSmall onClick={handleRemove}>
            remove
          </Button>
          <StyledReadMore onClick={handleReadMoreClick}>Read more</StyledReadMore>
        </StyledInsideWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.objectOf(PropTypes.string, PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Card;
