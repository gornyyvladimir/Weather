import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ProgressiveImage from 'react-progressive-image';

// transparent image for fade effect
const transparent =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=';

const Background = styled.img`
  ${breakpoint('tablet')`
    width: 100%;
    height: 100%;
    object-fit: cover;
    `}
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  filter: blur(10px);
  transform: scale(1.1);
`;

const ProgressiveBackground = props => (
  <ProgressiveImage src={props.imageUrl} placeholder={props.prevImage}>
    {src => (
      <BackgroundWrapper>
        <Background src={src} />
      </BackgroundWrapper>
    )}
  </ProgressiveImage>
);

ProgressiveBackground.defaultProps = {
  prevImage: null,
};

ProgressiveBackground.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  prevImage: PropTypes.string,
};

export default ProgressiveBackground;
