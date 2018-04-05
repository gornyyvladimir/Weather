import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import 'normalize.css';
import WeatherContainer from './containers/WeatherContainer'


injectGlobal`
  body{
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
    font-family: 'Roboto', sans-serif;
  }
`;

const theme = {
  primary: '#192a56',
  overlay: 'rgba(25, 42, 86, 0.5)',
};

const App = props => (
  <ThemeProvider theme={theme}>
    <WeatherContainer />
  </ThemeProvider>
);

export default App;
