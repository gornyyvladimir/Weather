import React, { Component } from 'react';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import WeatherContainer from './containers/WeatherContainer'

import 'normalize.css';

injectGlobal`
  body{
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
    font-family: 'Roboto', sans-serif;
  }
`;

const theme = {
  primary: '#192a56',
  overlay: 'rgba(25, 42, 86, 0.5)'
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <WeatherContainer />
      </ThemeProvider>
    );
  }
}

export default App;
