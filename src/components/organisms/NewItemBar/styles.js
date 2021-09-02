import styled from 'styled-components/macro';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Heading from 'components/atoms/Heading/Heading';
import { Form } from 'formik';
import Input from 'components/atoms/Input/Input';

export const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 45rem;
  background-color: white;
  z-index: 9;
  padding: 8rem 5rem 0 5rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 500ms ease-in-out;

  ::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 1.5rem;
    background-color: ${({ theme }) => theme.primary};
  }
`;

export const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const StyledInput = styled(Input)`
  margin: 1.5rem 0;
`;

export const StyledButton = styled(Button)`
  margin: 2rem 0 1rem 0;
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  align-self: flex-end;
  height: 3rem;
  width: 3rem;
  background-color: transparent;
  cursor: pointer;
  ${({ theme }) => theme.darkFilter};
  position: relative;
  transform: rotate(45deg);
  margin-top: 2rem;

  ::before {
    content: 'Close';
    text-transform: uppercase;
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.bold};
    left: -4.5rem;
    top: 4rem;
    transform: rotate(-45deg);
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledError = styled.div`
  color: red;
  margin-top: -1.5rem;
  padding: 0.2rem 0.8rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const StyledTodoInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  input {
    width: 100%;
    border-radius: 5rem 0 0 5rem;
  }

  button {
    margin-left: 0.2rem;
    padding: 1.1rem 2rem;
    margin-left: 0;
    border-radius: 0 5rem 5rem 0;
  }
`;

export const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTodoListItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #aaa;
  margin: 0 0 1rem 0;
  position: relative;
  padding: 0.3rem;
  padding-right: 2rem;
`;
