import React from "react";
import Icons from '../../images/Icons/Icons.svg';
import PropTypes from 'prop-types';

const Icon = ({ name, color, size }) => (
    <svg className={`Icon Icon-${name}`} fill={color} width={size} height={size}>
      <use xlinkHref={`${Icons}#Icon-${name}`} />
    </svg>
  );
  
  Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string
  };
  
  export default Icon;