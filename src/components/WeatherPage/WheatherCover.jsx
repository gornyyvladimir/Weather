import React, { Fragment } from 'react';
import ProgressiveImage from 'react-progressive-image';

const WheatherCover = ({image, hasError}) => {
  const renderImage = () => {
    if(hasError) {
      return <p>Error</p>;
    }
    else if(!image) {
      return <p>Loading ...</p>
    }
    else {
      return (
        <ProgressiveImage src={image.urls.regular} placeholder={image.urls.small}>
          {(src, loading) => (
            <div style={{overflow: `hidden`, width: `800px`, height: `600px`}}> 
              <div style={{ transform: `scale(1.1)`, background: `url(${src})`, backgroundSize: 'contain', width: `800px`, height: `600px`}}/>
            </div>
          )}
        </ProgressiveImage>
      );
    }
  };

  return renderImage();
};

export default WheatherCover;