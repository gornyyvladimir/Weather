import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  width: 100%;
  color: white;
  padding: 15px;
  border: none;
`;

const CityInput = props => <Input onChange={props.onChange}/>;

export default CityInput;

