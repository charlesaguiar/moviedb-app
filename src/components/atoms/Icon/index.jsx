import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = function ({ icon, color, size }) {
  return (
    <FontAwesomeIcon icon={icon} color={color} size={size} />
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  icon: 'coffee',
  size: 'sm',
  color: 'green',
};

export default Icon;
