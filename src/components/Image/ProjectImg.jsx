import React from 'react';
import PropTypes from 'prop-types';

const ProjectImg = ({ filename, alt }) => {
  if (!filename) return null;
  return <img className="rounded shadow-lg" style={{maxWidth: '98%'}} alt={alt} src={process.env.PUBLIC_URL + '/images/' + filename} />;
}

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
