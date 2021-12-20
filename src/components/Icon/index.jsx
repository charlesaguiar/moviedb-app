import React from 'react';
import PropTypes from 'prop-types';

import colors from 'design/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = function ({ icon, color, size }) {
  return (
    <FontAwesomeIcon icon={icon} color={colors[color]} size={size} />
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
  color: 'primaryActive',
};

export default Icon;
