import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import GooglePlacesContainer from '../../containers/GooglePlacesContainer';

// transparent image for fade effect
const transparent = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=';

const borderRadiusMixin = css`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Cover = styled.div`
  position: relative;
  background: ${props => (props.url ? `url(${props.url})` : `url(${transparent})`)};
  background-position: center center;
  background-size: cover;
  transition: background-image ease-in-out 1s;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => `linear-gradient(to bottom, ${props.theme.overlay}, rgba(255, 255, 255, 0))`};
    z-index: 2;
    ${breakpoint('tablet')`
      ${borderRadiusMixin}
    `}
  }

  ${breakpoint('tablet')`
    ${borderRadiusMixin}
  `}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  z-index: 3;
  ${breakpoint('tablet')`
    ${borderRadiusMixin}
  `}
`;

const Temperature = styled.span`
  position: relative;
  font-size: 82px;
  font-weight: 700;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

  &:not(:empty)::after {
    content: '°';
    position: absolute;
    top: 0;
    right: -20px;
    color: #fff;
    font-weight: 300;
    font-size: 4rem;
  }
`;

const City = styled.span`
  font-size: 22px;
  font-weight: 300;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  margin-top: auto;
`;

const Weather = styled.span`
  font-size: 22px;
  font-weight: 300;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: auto;
`;

const Author = styled.div`
  font-size: 14px;
  padding: 3px 12px;
  font-weight: 300;
  color: #fff;

  a {
    color: #fff;

    &:hover {
      text-decoration: none;
    }
  }
`;

const UNSPLASH_QUERY_PARAMS = '?utm_source=weather&utm_medium=referral';

const WheatherCover = props => (
  <ProgressiveImage
    src={props.imageUrl}
    placeholder={props.prevImage && props.prevImage}
  >
    {(src, loading) => (
      <Cover url={src} loading={loading}>
        <Container>
          <GooglePlacesContainer onAddressChange={props.setWeatherAndImage} setLocation={props.setLocation} />
          {
            !props.hasError && <City>{`${props.city}, ${props.country}`}</City>
          }
          <Temperature>
            {props.weekWeather ? Math.floor(props.weekWeather[0].temperature.day) : null}
          </Temperature>
          <Weather>
            {props.weekWeather && props.weekWeather[0].description}
          </Weather>
          <Author>
            Photo by <a href={props.userUrl + UNSPLASH_QUERY_PARAMS} target="_blank">{props.userName}</a> on <a href={`https://unsplash.com/${UNSPLASH_QUERY_PARAMS}`}>Unsplash</a>
          </Author>
        </Container>
      </Cover>
    )}
  </ProgressiveImage>
);

WheatherCover.propTypes = {
  imageUrl: PropTypes.string,
  prevImage: PropTypes.string,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  weekWeather: PropTypes.arrayOf(PropTypes.object),
  setWeatherAndImage: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
  userUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
};

WheatherCover.defaultProps = {
  imageUrl: '',
  prevImage: '',
  weekWeather: null,
};

export default WheatherCover;
