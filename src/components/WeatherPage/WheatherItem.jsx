import React, { Fragment } from 'react';

const WheatherItem = ({ day, temp }) => (
  <Fragment>
    {`${day} ${temp}`}
  </Fragment>
);

export default WheatherItem;