import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

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
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: white;  
  animation-name: ${props => props.animation ? `${fadeInUp}` : `${fadeOutDown}`};
  animation-duration: 1s;
  animation-fill-mode: both;
`;

const Close = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  margin: 0;
  padding: 0;
  border: 0;
  width: 2rem;
  height: 2rem;
  background: none;
  z-index: 10;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  &::after, &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1rem;
    width: 1px;
    height: 100%;
    background: black;
  }
  &::after {
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);    
  }
`;


const WheatherCard = (props) => {
  const data = props.card.weekWeather.map((item, key) => (
    {
      name: `Day ${key}`,
      temp: item.dayWeather.temp.day
    }
  ));
  console.log(data);
  return(
    <Container>
      <Card animation={props.animation}>
        <Close onClick={props.onClose} />
        <ResponsiveContainer width="100%" height="20%">
          <LineChart data={data}>
            <Line type="monotone" dataKey="temp" stroke="#8884d8" />
            <Tooltip />
            <XAxis dataKey="name" hideq/>
          </LineChart>
        </ResponsiveContainer>
      </Card>    
    </Container>
  );
};

export default WheatherCard;