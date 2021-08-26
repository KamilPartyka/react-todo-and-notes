import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { removeItem } from 'redux/actions';
import { TYPE } from 'utils/constants';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledDateInfo,
  StyledParagraph,
  StyledList,
  StyledListItem,
  StyledReadMe,
  StyledInsideWrapper,
} from 'components/molecules/Card/styles';

const Card = ({ cardType, title, created, content, id }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const handleCardClick = () => setState(true);

  const slicedContentArr = content.split(',');
  const arrWithUniqueKey = slicedContentArr.map((item, index) => ({
    text: item,
    id: `${id}_${index}`,
  }));

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
            {arrWithUniqueKey.map((item) => (
              <li key={item.id} id={`id${item.id}`}>
                <StyledListItem>{item.text}</StyledListItem>
              </li>
            ))}
          </StyledList>
        ) : (
          <StyledParagraph>{content}</StyledParagraph>
        )}
        <StyledInsideWrapper>
          <Button color="lightGrey" isSmall onClick={() => dispatch(removeItem(cardType.name, id))}>
            remove
          </Button>
          <StyledReadMe onClick={handleCardClick}>Read more</StyledReadMe>
        </StyledInsideWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.objectOf(PropTypes.string, PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Card;
