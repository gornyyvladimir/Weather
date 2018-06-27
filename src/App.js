import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import WeatherContainer from './containers/WeatherContainer';

// eslint-disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
`;

const theme = {
  primary: '#192a56',
  overlay: 'rgba(25, 42, 86, 0.5)',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <WeatherContainer />
  </ThemeProvider>
);

export default App;
