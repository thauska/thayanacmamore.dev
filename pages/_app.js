import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import Head from '../src/components/Head';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head title={db.title} bg={db.bg} description={db.description} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <GitHubCorner projectUrl="https://github.com/thauska" />
      </ThemeProvider>
      <Footer />
    </>
  );
}