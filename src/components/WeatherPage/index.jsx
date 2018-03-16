import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import WheatherWeek from './WheatherWeek';

const WeatherPage = ({weekWeather, city, hasError, onChange, country, image}) => {

  const renderImage = () => {
    if(hasError) {
      return;
    }
    else if(!image) {
      return <p>Loading ...</p>
    }
    else {
      return (
        <ProgressiveImage src={image.urls.regular} placeholder={image.urls.thumb}>
          {(src, loading) => (
            <div style={{overflow: `hidden`, width: `800px`, height: `600px`}}> 
              <div style={{ filter: `blur(${loading ? 5 : 0}px)`, transform: `scale(1.1)`, background: `url(${src})`, backgroundSize: 'cover', width: `800px`, height: `600px`}}/>
            </div>
          )}
        </ProgressiveImage>
      );
    }
  };

  return(
      <div>
        {
          hasError ? <p>Error</p> : 
          <div>
            {`${city}, ${country ? country : ''}`}
            {weekWeather && <WheatherWeek weekWeather={weekWeather}/>}
          </div>
        }
        <input type="text" onChange={onChange} />
        <div>
          {renderImage()}
        </div>
      </div>
  );
};

export default WeatherPage;