import React from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import GooglePlaces from './GooglePlaces';

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
  font-size: 82px;
  font-weight: 700;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
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

const WheatherCover = props => (
  <ProgressiveImage
    src={props.image && props.image}
    placeholder={props.prevImage && props.prevImage}
  >
    {(src, loading) => (
      <Cover url={src} loading={loading}>
        <Container>
          <GooglePlaces />
          <City>{`${props.city}, ${props.country}`}</City>
          <Temperature>
            {props.weekWeather ? Math.floor(props.weekWeather[0].temp.day) : null}°
          </Temperature>
          <Weather>
            {props.weekWeather && props.weekWeather[0].weather[0].main}
          </Weather>
        </Container>
      </Cover>
    )}
  </ProgressiveImage>
);

WheatherCover.propTypes = {
  image: PropTypes.string,
  prevImage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  weekWeather: PropTypes.arrayOf(PropTypes.object),
};

WheatherCover.defaultProps = {
  image: '',
  prevImage: '',
  weekWeather: null,
};

export default WheatherCover;
