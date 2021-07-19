import { ThemeProvider } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { theme } from '../../theme/mainTheme';
import Button from '../../components/atoms/Button/Button';
import GlobalStyle from '../../theme/GlobalStyles';
import Logo from '../../components/atoms/Logo/Logo';
import Input from '../../components/atoms/Input/Input';

const Root = () => (
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
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello World</h1>
        <Logo small />
        <Button title="close" color="secondary" />
        <br /> <br />
        <Input search />
      </>
    </ThemeProvider>
  </HelmetProvider>
);

export default Root;
