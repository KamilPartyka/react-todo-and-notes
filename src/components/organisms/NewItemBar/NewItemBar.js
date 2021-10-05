import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field, Formik, ErrorMessage } from 'formik';
import { addItem } from 'redux/actions';
import PageContext from 'utils/context';
import PropTypes from 'prop-types';
import { TYPE } from 'utils/constants';
import plusIcon from 'assets/plus.svg';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import {
  StyledWrapper,
  StyledHeading,
  StyledButton,
  StyledButtonIcon,
  StyledForm,
  StyledError,
  StyledInput,
  StyledTodoInput,
  StyledTodoList,
  StyledTodoListItem,
} from 'components/organisms/NewItemBar/styles';

const NewItemBar = ({ isVisible, callbackFn: closeModal }) => {
  const dispatch = useDispatch();
  const pageType = useContext(PageContext);
  const typeSelctor = pageType === TYPE.todos.name ? 'ToDo' : 'Note';
  const colorSelctor = pageType === TYPE.todos.name ? TYPE.todos.color : TYPE.notes.color;

  const [state, setState] = useState([]);
  const [inputState, setInputState] = useState('');

  const strlen = (item) => {
    const arrOfWords = item.split(' ');
    const arrOfWordsLength = arrOfWords.map((word) => word.length);
    return Math.max(...arrOfWordsLength);
  };

  // eslint-disable-next-line react/prop-types
  const FormikInput = ({ field, form, ...props }) => <StyledInput {...field} {...props} />;

  const initialValues = { title: '', content: [''], created: '' };

  const handleValidateToDo = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    } else if (strlen(values.title) > 20 || values.title.length > 40) {
      errors.title = 'Title canont be longer that 40 characters and single word that 20';
    }
    if (strlen(inputState) > 30 || inputState.length > 120) {
      errors.content = `${typeSelctor} canont be longer that 120 characters and single word that 30`;
    }
    if (state.length < 1) {
      errors.content = `Required ToDo`;
    }
    if (!errors.content) {
      values.content = state;
    }
    return errors;
  };

  const handleValidateNote = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    } else if (strlen(values.title) > 20 || values.title.length > 40) {
      errors.title = 'Title canont be longer that 40 characters and single word that 20';
    }
    if (values.content.length <= 1) {
      errors.content = 'Required';
    } else if (strlen(values.content) > 30 || values.content.length > 300) {
      errors.content = `${typeSelctor} canont be longer that 300 characters and single word that 30`;
    }
    return errors;
  };

  const handleInputChange = (e, values) => {
    handleValidateToDo(values);
    setInputState(e.target.value);
  };

  const handleAddTodoItem = (setErrors) => {
    if (inputState) {
      setErrors({});
      setState([...state, inputState]);
      setInputState('');
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addItem(pageType, values));
    closeModal();
    resetForm();
    setState([]);
    setInputState('');
  };

  return (
    <StyledWrapper isVisible={isVisible}>
      <StyledHeading pageType={pageType}>Add new {typeSelctor}</StyledHeading>
      {pageType === TYPE.todos.name ? (
        <Formik initialValues={initialValues} validate={handleValidateToDo} onSubmit={handleSubmit}>
          {({ values, handleBlur, setErrors }) => (
            <StyledForm autoComplete="off">
              <Field component={FormikInput} placeholder="title" type="text" name="title" />
              <ErrorMessage name="title" component={StyledError} />
              <StyledTodoList>
                {state.map((item, index) => (
                  <StyledTodoListItem key={index}>
                    <Paragraph>{item}</Paragraph>
                  </StyledTodoListItem>
                ))}
              </StyledTodoList>
              <StyledTodoInput>
                <Input
                  type="text"
                  name="todoInput"
                  placeholder={typeSelctor}
                  value={inputState}
                  onBlur={handleBlur}
                  onChange={(e) => handleInputChange(e, values)}
                />
                <Button
                  isSmall
                  type="button"
                  color={colorSelctor}
                  onClick={() => handleAddTodoItem(setErrors)}
                >
                  Add
                </Button>
              </StyledTodoInput>
              <ErrorMessage name="content" component={StyledError} />
              <StyledButton type="submit" color={colorSelctor}>
                Add {typeSelctor}
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
      ) : (
        <Formik initialValues={initialValues} validate={handleValidateNote} onSubmit={handleSubmit}>
          <StyledForm autoComplete="off">
            <Field component={FormikInput} placeholder="title" type="text" name="title" />
            <ErrorMessage name="title" component={StyledError} />
            <Field
              component={FormikInput}
              isTextarea
              placeholder={typeSelctor}
              type="text"
              name="content"
            />
            <ErrorMessage name="content" component={StyledError} />
            <StyledButton type="submit" color={colorSelctor}>
              Add {typeSelctor}
            </StyledButton>
          </StyledForm>
        </Formik>
      )}
      <StyledButtonIcon icon={plusIcon} onClick={() => closeModal()} />
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  callbackFn: PropTypes.func.isRequired,
};

export default NewItemBar;
