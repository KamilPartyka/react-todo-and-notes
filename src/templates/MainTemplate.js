import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyles';
import { TYPE } from 'utils/constants';
import PageContext from 'utils/context';

const MainTemplate = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const [state, setState] = useState('todos');

  useEffect(() => {
    const pageTypes = [TYPE.todos.name, TYPE.notes.name];
    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));
    setState(currentPage);
  }, [pathname]);

  return (
    <>
      <PageContext.Provider value={state}>
        <HelmetProvider>
          <Helmet>
            <title>ToDo&apos;s and Notes</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Rock+Salt&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </HelmetProvider>
      </PageContext.Provider>
    </>
  );
};
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
