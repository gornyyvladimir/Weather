import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
// import 'normalize.css';
import WeatherContainer from './containers/WeatherContainer';
// import RobotoRegular from './static/fonts/RobotoRegular/RobotoRegular.woff';
// import RobotoLight from './static/fonts/RobotoLight/RobotoLight.woff';
// import RobotoBold from './static/fonts/RobotoBold/RobotoBold.woff';


injectGlobal`
  /* @font-face {
    font-family: "RobotoRegular";
    src: url(${RobotoRegular});
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "RobotoLight";
    src: url(${RobotoLight});
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "RobotoBold";
    src: url(${RobotoBold});
    font-style: normal;
    font-weight: normal;
  } */
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
  body{
    font-family: 'Roboto', sans-serif;
    margin: 0;
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
