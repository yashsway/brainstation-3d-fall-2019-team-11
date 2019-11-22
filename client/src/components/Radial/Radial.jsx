import React from 'react';
import { RadialGauge } from 'reaviz';

export default class Radial extends React.Component {
  name = this.props.name;
  render(){
    return(
      <RadialGauge
        height={300}
        width={300}
        data={[{ key: `${this.name}`, data: 24 }]}
      />
    );
  }
};