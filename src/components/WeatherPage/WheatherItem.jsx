import React, { Fragment } from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-size: 18px;
  color: #192a56;
`;

const WheatherItem = ({ day, temp }) => (
  <Fragment>
    <Text>{day}</Text>
    <Text>{Math.floor(temp)}° C</Text>
  </Fragment>
);

export default WheatherItem;