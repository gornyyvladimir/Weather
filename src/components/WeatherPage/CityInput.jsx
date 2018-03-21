import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  width: 100%;
  color: white;
  font-size: 22px;
  font-weight: 300;    
  /* padding: 15px; */
  border: none;
  border-bottom: 2px solid white;
  box-sizing:border-box;
  &:focus {
    outline: 0;
  }
`;

const Wrapper = styled.div`
  padding: 15px 30px;
  position: relative;
  align-self: stretch;
  /* margin-bottom: 10vh; */
`;

const Tooltip = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  color: white;
  font-size: 22px;
  font-weight: 300;  
  opacity: 0.3;
`;

const CityInput = props => (
  <Wrapper>
    <Input onChange={props.onChange} type="text"/>
  </Wrapper>
);

export default CityInput;

