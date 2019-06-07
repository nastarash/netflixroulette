import React from 'react';
import PropTypes from 'prop-types';

export const FilmResultReleaseDate = ({ date }) => (
  <React.Fragment>{date}</React.Fragment>
);
FilmResultReleaseDate.propTypes = {
  date: PropTypes.any,
};
