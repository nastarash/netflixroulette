import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { DummyInput } from 'CommonComponents/DummyInput';
import { DummyButton } from 'CommonComponents/DummyButton';
import { Switcher } from 'CommonComponents/Switcher';

import { setSearchType, setSearchString } from '@actions/filter';
import { filmsFetchData } from '@actions/films';
import PropTypes from 'prop-types';
import './styles.scss';

export class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  propTypes = {
    search: PropTypes.any,
    searchBy: PropTypes.any,
    sortBy: PropTypes.any,
    setSearchType: PropTypes.any,
    setSearchValue: PropTypes.any,
    fetchData: PropTypes.object,
    history: PropTypes.any,
  };

  componentWillMount() {
    this.setState({
      search: this.props.search,
    });
  }

  typeChangeHandler = str => {
    if (str === 'genre') {
      str = 'genres';
    }
    this.props.setSearchType(str);
  };

  inputHandler = e => {
    this.props.setSearchValue(e.target.value);
    this.setState({
      search: e.target.value,
    });
  };

  onSubmit = () => {
    const { search, searchBy, sortBy } = this.props;

    this.props.fetchData({
      search: this.state.search,
      searchBy,
      sortBy,
      sortOrder: 'asc',
    });

    this.props.history.push(`/search/${encodeURI(search)}`);
  };

  render() {
    const { search } = this.state;

    return (
      <div className="search-input">
        <div className="search-input__input">
          <DummyInput onInput={this.inputHandler} value={search} />
        </div>
        <div className="search-input__controls">
          <span className="search-input__text">Search by</span>
          <div className="search-input__switcher">
            <Switcher
              variants={['title', 'genre']}
              default="title"
              onChange={this.typeChangeHandler}
            />
          </div>
          <div className="search-input__submit">
            <DummyButton
              text="Search"
              isActive
              width="100px"
              onClick={this.onSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  searchBy: state.searchBy,
  sortBy: state.sortBy,
});

const mapDispatchToProps = dispatch => ({
  setSearchType: typeName => dispatch(setSearchType(typeName)),
  setSearchValue: value => dispatch(setSearchString(value)),
  fetchData: params => dispatch(filmsFetchData(params)),
});

export const SearchInputWithoutRouter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);

export const SearchInputContainer = withRouter(SearchInputWithoutRouter);
