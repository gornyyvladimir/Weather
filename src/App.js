import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import WeatherContainer from './containers/WeatherContainer'

import 'normalize.css';

injectGlobal`
  body{
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
    font-family: 'Roboto', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <WeatherContainer />
    );
  }
}

export default App;
