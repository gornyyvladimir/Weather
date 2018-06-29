## Weather app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project was created for training React.js. It use [Styled components](https://www.styled-components.com/) for css in Js, [Unsplash api](https://unsplash.com/developers) to upload weather images, [Open Weather Map](https://openweathermap.org/api) to get current weather.

Project built on React 16, ES7. It use async, await, axios for make requests.
The project is adapted to [PWA](https://developers.google.com/web/progressive-web-apps/).

## Setup

### Requirements

1. [NVM](https://github.com/creationix/nvm#install-script)
2. Node >4, <=9
3. [Yarn](https://yarnpkg.com/lang/en/docs/install/)
4. [Watchman](https://facebook.github.io/watchman/docs/install.html)

### Starting

Resolve dependencies

```bash
yarn
```

Start app on dev server

```bash
yarn start
```

Run tests

```bash
yarn test
```

### Deployment

We use Travis CI for deployment. Deployment triggers on any commit on branch "production"
