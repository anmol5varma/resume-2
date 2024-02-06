import React from 'react';
import PropTypes from 'prop-types';

const AboutImg = ({ filename, alt }) => {
  if (!filename) return null;
  return <img className="rounded shadow-lg" alt={alt} src={'/images/' + filename} width={350}  />;
}

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
