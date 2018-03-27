import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  perspective: 800px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  background: white;  
  animation-name: ${props => props.animation ? `${fadeInUp}` : `${fadeOutDown}`};
  animation-duration: 1s;
  animation-fill-mode: both;
  /* transition: transform ease-in-out 0.8s;
  transform-style: preserve-3d;
  transform-origin: left center;
  transform: ${props => props.param ? 'rotateY(0)' : 'rotateY(180deg)'}; */
`;

const WheatherCard = (props) => (
  <Container param={props.param}>
  {console.log(props)}
    <Card param={props.param} animation={props.animation} onClick={props.onClose}>1</Card>    
  </Container>
);

export default WheatherCard;