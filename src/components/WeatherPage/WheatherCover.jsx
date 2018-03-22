import React, { Fragment } from 'react';
import ProgressiveImage from 'react-progressive-image';
import styled from 'styled-components';
import CityInput from './CityInput';

const CoverWrapper = styled.div`
  /* overflow: hidden; */
`;

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: 60vh;
  /* padding: 1rem; */
  background: linear-gradient(to bottom, rgba(30, 75, 115, 0.5), rgba(255, 255, 255, 0)), ${props => props.url ? `url(${props.url})` : 'none'};
  background-position: center center;
  background-size: cover;
  /* transform: scale(1.1); */
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

const WheatherCover = ({image, hasError, city, country, inputValue, weekWeather, onChange}) => {
  const renderCover = () => {
    if(image) {
      return (
        <ProgressiveImage src={image.urls.regular} placeholder={image.urls.thumb}>
          {(src) => (
            <CoverWrapper> 
              <Cover url={src}>
                <CityInput onChange={onChange} value={inputValue} hasError={hasError}/>
                <City>{`${city}, ${country}`}</City>
                <Temperature>{weekWeather ? Math.floor(weekWeather[0].dayWeather.temp.day) : null}°</Temperature>
              </Cover>
            </CoverWrapper>
          )}
        </ProgressiveImage>
      );
    }
    else {
      return (
        <CoverWrapper> 
          <Cover>
            <CityInput onChange={onChange} value={inputValue} hasError={hasError}/>
            <City>{`${city}, ${country}`}</City>
            <Temperature>{weekWeather ? Math.floor(weekWeather[0].dayWeather.temp.day) : null}°</Temperature>
          </Cover>
        </CoverWrapper>
      );
    }
  };

  return renderCover();
};

export default WheatherCover;