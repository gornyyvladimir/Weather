import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ProgressiveImage from 'react-progressive-image';

// transparent image for fade effect
const transparent = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=';

const Background = styled.div`
  ${breakpoint('tablet')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${props => (props.url ? `url(${props.url})` : `url(${transparent})`)};
    background-position: center center;
    background-size: cover;
    filter: blur(40px);
    transition: background ease-in-out 1s;
    transform: scale(1.1);
    z-index: -1;
    `}
`;

const ProgressiveBackground = props => (
  <ProgressiveImage
    src={props.image}
    placeholder={props.prevImage}
  >
    {src => <Background url={src} />}
  </ProgressiveImage>
);

ProgressiveBackground.defaultProps = {
  prevImage: null,
};

ProgressiveBackground.propTypes = {
  image: PropTypes.string.isRequired,
  prevImage: PropTypes.string,
};

export default ProgressiveBackground;
