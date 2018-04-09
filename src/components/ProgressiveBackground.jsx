import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ProgressiveImage from 'react-progressive-image';

const Background = styled.div`
  ${breakpoint('tablet')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${props => (props.url ? `url(${props.url})` : 'none')};
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
    src={props.image && props.image}
    placeholder={props.prevImage && props.prevImage}
  >
    {src => <Background url={src} />}
  </ProgressiveImage>
);

ProgressiveBackground.propTypes = {
  image: PropTypes.string.isRequired,
  prevImage: PropTypes.string.isRequired,
};

export default ProgressiveBackground;
