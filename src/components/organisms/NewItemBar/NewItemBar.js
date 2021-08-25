import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import plusIcon from 'assets/plus.svg';
import Input from 'components/atoms/Input/Input';
import {
  StyledWrapper,
  StyledHeading,
  StyledButton,
  StyledButtonIcon,
} from 'components/organisms/NewItemBar/styles';
import PageContext from 'utils/context';
import { TYPE } from 'utils/constants';
import PropTypes from 'prop-types';
import { addItem } from 'redux/actions';

const NewItemBar = ({ isVisible, callbackFn }) => {
  const dispatch = useDispatch();
  const pageType = useContext(PageContext);
  const typeSelctor = pageType === TYPE.todos.name ? 'ToDo' : 'Note';
  const colorSelctor = pageType === TYPE.todos.name ? TYPE.todos.color : TYPE.notes.color;

  return (
    <StyledWrapper isVisible={isVisible}>
      <StyledHeading>Add new {typeSelctor}</StyledHeading>
      <Input placeholder="title" />
      <Input isTextarea placeholder={typeSelctor} />
      <StyledButton
        color={colorSelctor}
        onClick={() =>
          dispatch(
            addItem(pageType, { title: 'test', created: '1 day', content: 'test content test' }),
          )
        }
      >
        Add {typeSelctor}
      </StyledButton>
      <StyledButtonIcon icon={plusIcon} onClick={callbackFn} />
    </StyledWrapper>
  );
};
NewItemBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  callbackFn: PropTypes.func.isRequired,
};

export default NewItemBar;
