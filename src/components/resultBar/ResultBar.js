import React from 'react';

class ResultBar extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  render() {
    return <div> {this.state.counter} movies found</div>;
  }
}

export default ResultBar;
