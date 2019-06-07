import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  propTypes = {
    children: PropTypes.any,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {}

  render() {
    if (this.state.hasError) {
      return <h1>Ooops! Something wrong...</h1>;
    }

    return this.props.children;
  }
}
