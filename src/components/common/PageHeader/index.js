import React, { Component } from 'react';
import './styles.scss';
import { Logo } from 'CommonComponents/Logo';
import { DummyButton } from 'CommonComponents/DummyButton';
import PropTypes from 'prop-types';
import { SearchPanelContainer } from '../../SearchPanel';
import { SearchResultsContainer } from '../SearchResultsContainer';

export class PageHeader extends Component {
  propTypes = {
    history: PropTypes.any,
    children: PropTypes.any,
    location: PropTypes.any,
  };

  handleSearchClick = () => {
    this.props.history.push('/');
  };

  render() {
    const { children, location } = this.props;
    let buttonBlock = null;

    if (location.pathname.startsWith('/film/')) {
      buttonBlock = (
        <div className="page-header__search-button">
          <DummyButton
            text="SEARCH"
            isActive
            onClick={this.handleSearchClick}
          ></DummyButton>
        </div>
      );
    }

    return (
      <header>
        <div className="page-header">
          <div className="page-header__background" />
          <div className="page-header__container">
            <Logo />
            {buttonBlock}

            <SearchPanelContainer />
            {children}
          </div>
        </div>
        <SearchResultsContainer />
      </header>
    );
  }
}
