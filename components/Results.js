import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

export default class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment.Group horizontal>
        <Segment />
        <Segment textAlign="center">results</Segment>
        <Segment />
      </Segment.Group>
    );
  }
}
