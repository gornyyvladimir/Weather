import React, { Fragment } from 'react';
import styled from 'styled-components';

const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;

  &::after {
    content: '';
    position: absolute;
    top: 25px;
    left: 15px;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-bottom-width: 4px;
    border-top-width: 4px;
    border-left: 4px solid #192a56;
  }
`;

const Text = styled.span`
  font-size: 18px;
  color: #192a56;
`;

const WheatherItem = ({ day, temp }) => (
  <Item>
    <Text>{day}</Text>
    <Text>{Math.floor(temp)}° C</Text>
  </Item>
);

export default WheatherItem;