import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return <p>Loading...</p>;
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

export { Loading };
