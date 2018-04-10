import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
// import 'normalize.css';
import WeatherContainer from './containers/WeatherContainer';


injectGlobal`
  @font-face {
    font-family: "RobotoRegular";
    src: url("%PUBLIC_URL%/fonts/RobotoRegular/RobotoRegular.eot");
    src: url("%PUBLIC_URL%/fonts/RobotoRegular/RobotoRegular.eot?#iefix")format("embedded-opentype"),
    url("%PUBLIC_URL%/fonts/RobotoRegular/RobotoRegular.woff") format("woff"),
    url("%PUBLIC_URL%/fonts/RobotoRegular/RobotoRegular.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "RobotoLight";
    src: url("%PUBLIC_URL%/fonts/RobotoLight/RobotoLight.eot");
    src: url("%PUBLIC_URL%/fonts/RobotoLight/RobotoLight.eot?#iefix")format("embedded-opentype"),
    url("%PUBLIC_URL%/fonts/RobotoLight/RobotoLight.woff") format("woff"),
    url("%PUBLIC_URL%/fonts/RobotoLight/RobotoLight.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: "RobotoBold";
    src: url("%PUBLIC_URL%/fonts/RobotoBold/RobotoBold.eot");
    src: url("%PUBLIC_URL%/fonts/RobotoBold/RobotoBold.eot?#iefix")format("embedded-opentype"),
    url("%PUBLIC_URL%/fonts/RobotoBold/RobotoBold.woff") format("woff"),
    url("%PUBLIC_URL%/fonts/RobotoBold/RobotoBold.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }

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
