import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div>
    <h2 className="section-title">{title}</h2>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
