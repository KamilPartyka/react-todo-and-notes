import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

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

export const StyledError = styled.div`
  color: red;
  margin-top: -1.5rem;
  padding: 0 0.8rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <Logo />
      {children}
    </StyledInnerWrapper>
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default AuthTemplate;
