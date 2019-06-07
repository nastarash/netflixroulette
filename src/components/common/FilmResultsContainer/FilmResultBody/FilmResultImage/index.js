import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const FilmResultImage = props => (
  <div>
    <img
      className="film-result-image"
      src={props.imageSrc}
      alt={props.imageAlt}
    />
  </div>
);
FilmResultImage.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
};
