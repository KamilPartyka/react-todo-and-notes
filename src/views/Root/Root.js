import { ThemeProvider } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { theme } from '../../theme/mainTheme';
import Button from '../../components/atoms/Button/Button';
import GlobalStyle from '../../theme/GlobalStyles';
import Logo from '../../components/atoms/Logo/Logo';
import Input from '../../components/atoms/Input/Input';
import ButtonMenu from '../../components/atoms/ButtonMenu/ButtonMenu';
import Card from '../../components/molecules/Card/Card';

const BUTTON_TEXT = {
  todos: "ToDo's",
  notes: 'Notes',
};

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
        <Button title="REGISTER" color="tertiary" />
        <br /> <br />
        <Input search />
        <Input />
        <br /> <br />
        <ButtonMenu buttonText={BUTTON_TEXT} text={BUTTON_TEXT.notes} />
        <ButtonMenu buttonText={BUTTON_TEXT} text={BUTTON_TEXT.todos} />
        <br /> <br />
        <Card />
      </>
    </ThemeProvider>
  </HelmetProvider>
);

export default Root;
