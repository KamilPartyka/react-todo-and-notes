import React, { useState } from 'react';
import { TYPE } from 'utils/constants';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components/macro';
import axios from 'axios';
import AuthTemplate from 'templates/AuthTemplate';

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
  cursor: pointer;
  padding-bottom: 0.5rem;
`;

export const StyledError = styled.div`
  color: red;
  margin-top: -1.5rem;
  padding: 0 0.8rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

// eslint-disable-next-line react/prop-types
const FormikInput = ({ field, form, ...props }) => <StyledInput {...field} {...props} />;

const initialValues = { username: '', password: '' };

const handleValidate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

const handleLoginSubmit = ({ username, password }) => {
  axios
    .post('http://localhost:9000/api/user/login', {
      username,
      password,
    })
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('login success');
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

const handleRegisterSubmit = ({ username, password }) => {
  axios
    .post('http://localhost:9000/api/user/register', {
      username,
      password,
    })
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('register success');
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AuthTemplate>
      <Formik
        initialValues={initialValues}
        validate={handleValidate}
        onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}
      >
        <StyledForm>
          <Field type="text" name="username" component={FormikInput} placeholder="username" />
          <ErrorMessage name="username" component={StyledError} />
          <Field type="password" name="password" component={FormikInput} placeholder="password" />
          <ErrorMessage name="password" component={StyledError} />
          <Button type="submit" color={TYPE.todos.color}>
            {isLogin ? 'Log in' : 'Register'}
          </Button>
          {isLogin ? (
            <StyledParagraph onClick={() => setIsLogin(false)}>Create account</StyledParagraph>
          ) : (
            <StyledParagraph onClick={() => setIsLogin(true)}>Log in</StyledParagraph>
          )}
        </StyledForm>
      </Formik>
    </AuthTemplate>
  );
};

export default AuthPage;
