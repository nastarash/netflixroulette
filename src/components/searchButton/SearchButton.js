import React, { Fragment } from "react";
import SearchField from "../searchField/SearchField";
import SearchFilter from "../searchFilter/SearchFilter";
import ErrorBoudaries from "../../ErrorBoundaries";

class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onButtonClick() {
    console.log("Button works");
  }

  render() {
    return (
      <Fragment>
        <ErrorBoudaries>
          <SearchField />
          <SearchFilter />
          <button type="submit" onClick={this.onButtonClick}>
            Seacrh
          </button>
        </ErrorBoudaries>
      </Fragment>
    );
  }
}

export default SearchButton;
