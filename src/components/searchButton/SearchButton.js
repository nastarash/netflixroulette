import React from 'react';

class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onButtonClick() {
    document.getElementById('resultForm').style.display = 'block';
  }

  render() {
    return (
      <button type="submit" onClick={this.onButtonClick}>
        Seacrh
      </button>
    );
  }
}

export default SearchButton;
