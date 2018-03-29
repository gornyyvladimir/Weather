import React, { Fragment } from 'react';
import ProgressiveImage from 'react-progressive-image';
import styled from 'styled-components';
import CityInput from './CityInput';

const Cover = styled.div`
  position: relative;
  background: ${props => props.url ? `url(${props.url})` : 'none'};
  background-position: center center;
  background-size: cover;
  transition: background ease-in-out 1s;
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
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;      
  z-index: 3;
`;

const Temperature = styled.span`
  font-size: 82px;
  font-weight: 700;  
  color: white;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.1);
  margin-bottom: auto;   
`;

const City = styled.span`
  font-size: 22px;
  font-weight: 300;
  color: white;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.1); 
  margin-top: auto; 
`;

const WheatherCover = props => (
  <ProgressiveImage src={props.image && props.image} placeholder={props.prevImage && props.prevImage}>
    {(src, loading) => (
      <Cover url={src} loading>
        <Container>
          <CityInput onChange={props.onChange} value={props.inputValue} hasError={props.hasError}/>
          <City>{`${props.city}, ${props.country}`}</City>
          <Temperature>{props.weekWeather ? Math.floor(props.weekWeather[0].temp.day) : null}°</Temperature>
        </Container>
      </Cover>
    )}
  </ProgressiveImage>
);

export default WheatherCover;