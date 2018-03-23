import React, { Fragment } from 'react';
import ProgressiveImage from 'react-progressive-image';
import styled from 'styled-components';
import CityInput from './CityInput';

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  background: linear-gradient(to bottom, rgba(30, 75, 115, 0.5), rgba(255, 255, 255, 0)), ${props => props.url ? `url(${props.url})` : 'none'};
  background-position: center center;
  background-size: cover;
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
  <ProgressiveImage src={props.image && props.image.urls.regular} placeholder={props.image && props.image.urls.thumb}>
    {(src) => (
      <Cover url={src}>
        <CityInput onChange={props.onChange} value={props.inputValue} hasError={props.hasError}/>
        <City>{`${props.city}, ${props.country}`}</City>
        <Temperature>{props.weekWeather ? Math.floor(props.weekWeather[0].dayWeather.temp.day) : null}°</Temperature>
      </Cover>
    )}
  </ProgressiveImage>
);

export default WheatherCover;