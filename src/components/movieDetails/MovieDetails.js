import React from 'react';

class MovieDetails extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="" alt="bla-bla" />
        <h3>Tile</h3>
        <h4>Short Decrption</h4>
        <span>Duration</span>
        <span>Release Year</span>
        <span>Rating</span>
        <span>Description</span>
      </div>
    );
  }
}

export default MovieDetails;
