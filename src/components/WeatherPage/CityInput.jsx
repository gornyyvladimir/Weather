import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  width: 100%;
  color: white;
  font-size: 22px;
  font-weight: 300;
  border: none;
  border-bottom: 2px solid white;
  border-color: ${props => (props.hasError ? 'red' : 'white')};
  transition: border-color 0.5s ease-in-out;
  box-sizing: border-box;
  &:focus {
    outline: 0;
  }
`;

const Wrapper = styled.div`
  padding: 15px 30px;
  position: relative;
  align-self: stretch;
`;

const Label = styled.label`
  display: block;
  height: 0;
  opacity: 0;
`;

// const Tooltip = styled.span`
//   position: absolute;
//   top: 0;
//   left: 0;
//   padding: 15px;
//   color: white;
//   font-size: 22px;
//   font-weight: 300;
//   opacity: 0.3;
// `;

const CityInput = props => (
  <Wrapper>
    <Label htmlFor="city">City</Label>
    <Input onChange={props.onChange} type="text" value={props.value} hasError={props.hasError} id="city" />
  </Wrapper>
);

CityInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default CityInput;
