import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: ${props => props.param ? 'block' : 'none'};
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
  transition: transform ease-in-out 0.8s;
  transform-style: preserve-3d;
  transform-origin: left center;
  transform: ${props => props.param ? 'rotateY(0)' : 'rotateY(180deg)'};
`;

const WheatherCard = (props) => (
  <Container param={props.param}>
  {console.log(props.param)}
    <Card param={props.param}>1</Card>    
  </Container>
);

export default WheatherCard;