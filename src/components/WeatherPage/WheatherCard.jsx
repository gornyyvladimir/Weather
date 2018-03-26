import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  perspective: 800px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform ease-in-out 1s;
  transform-origin: center top;
`;

const Front = styled.div`
  margin: 0;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: red;
`; 

const Back = styled.div`
  margin: 0;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: blue;
  transform: rotateX( 180deg );
`; 

const WheatherCard = (props) => (
  <Container>
    <Card>
      <Front class="front">1</Front>
      {/* <Back class="back">2</Back> */}
    </Card>    
  </Container>
);

export default WheatherCard;