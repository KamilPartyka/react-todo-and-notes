import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import plusIcon from 'assets/plus.svg';
import Input from 'components/atoms/Input/Input';
import {
  StyledWrapper,
  StyledHeading,
  StyledButton,
  StyledButtonIcon,
  StyledParagraph,
  StyledForm,
  StyledError,
} from 'components/organisms/NewItemBar/styles';
import PageContext from 'utils/context';
import { TYPE } from 'utils/constants';
import PropTypes from 'prop-types';
import { addItem } from 'redux/actions';
import { Formik } from 'formik';

const NewItemBar = ({ isVisible, callbackFn }) => {
  const dispatch = useDispatch();
  const pageType = useContext(PageContext);
  const typeSelctor = pageType === TYPE.todos.name ? 'ToDo' : 'Note';
  const colorSelctor = pageType === TYPE.todos.name ? TYPE.todos.color : TYPE.notes.color;

  const strlen = (item) => {
    const arrOfWords = item.split(' ');
    const arrOfWordsLength = arrOfWords.map((word) => word.length);
    return Math.max(...arrOfWordsLength);
  };

  return (
    <StyledWrapper isVisible={isVisible}>
      <StyledHeading pageType={pageType}>Add new {typeSelctor}</StyledHeading>
      {pageType === TYPE.todos.name && (
        <StyledParagraph>
          enter elements by separating them with a comma (eg: clean room, buy bread, ...)
        </StyledParagraph>
      )}
      <Formik
        initialValues={{ title: '', content: '', created: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
          } else if (strlen(values.title) > 20 || values.title.length > 40) {
            errors.title = 'Title canont be longer that 40 characters and single word that 20';
          }
          if (!values.content) {
            errors.content = 'Required';
          } else if (strlen(values.content) > 30 || values.content.length > 300) {
            errors.content = `${typeSelctor}  canont be longer that 300 characters and single word that 30`;
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(addItem(pageType, values));
          callbackFn();
          resetForm();
        }}
      >
        {({ values, errors, handleChange, handleBlur }) => (
          <StyledForm autoComplete="off">
            <Input
              placeholder="title"
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && <StyledError>{errors.title}</StyledError>}
            <Input
              isTextarea
              placeholder={typeSelctor}
              type="text"
              name="content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            {errors.content && <StyledError>{errors.content}</StyledError>}
            <StyledButton type="submit" color={colorSelctor}>
              Add {typeSelctor}
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
      <StyledButtonIcon icon={plusIcon} onClick={callbackFn} />
    </StyledWrapper>
  );
};
NewItemBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  callbackFn: PropTypes.func.isRequired,
};

export default NewItemBar;
