import React from 'react';

class ResultForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: this.props };
  }

  render() {
    return (
      <div id="resultForm" style={{ display: this.state.display }}>
        No movie found
      </div>
    );
  }
}

export default ResultForm;
