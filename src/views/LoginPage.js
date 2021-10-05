import React from 'react';
import { Link } from 'react-router-dom';
import { TYPE } from 'utils/constants';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Logo from 'components/atoms/Logo/Logo';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components/macro';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -20rem;
`;

const StyledForm = styled(Form)`
  min-width: 35rem;
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
`;

const StyledInput = styled(Input)`
  :first-of-type {
    margin-top: 2.5rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  text-decoration-line: underline;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const StyledError = styled.div`
  color: red;
  margin-top: -1.5rem;
  padding: 0 0.8rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

// eslint-disable-next-line react/prop-types
const FormikInput = ({ field, form, ...props }) => <StyledInput {...field} {...props} />;

const initialValues = { login: '', password: '' };

const handleValidate = (values) => {
  const errors = {};
  if (!values.login) {
    errors.login = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

const handleSubmit = (values) => {
  // eslint-disable-next-line no-console
  console.log(values);
};

const LoginPage = () => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <Logo />
      <Formik initialValues={initialValues} validate={handleValidate} onSubmit={handleSubmit}>
        <StyledForm>
          <Field type="text" name="login" component={FormikInput} placeholder="login" />
          <ErrorMessage name="login" component={StyledError} />
          <Field type="password" name="password" component={FormikInput} placeholder="password" />
          <ErrorMessage name="password" component={StyledError} />
          <Button type="submit" color={TYPE.todos.color}>
            Log in
          </Button>
          <Link to="/">
            <StyledParagraph>Create account</StyledParagraph>
          </Link>
        </StyledForm>
      </Formik>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default LoginPage;
