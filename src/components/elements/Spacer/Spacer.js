import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const propTypes = {
  y: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
};

const Spacer = ({ y = 4 }) => {
  return <div className={styles[`y${y}`]}></div>;
};

Spacer.propTypes = propTypes;

export default Spacer;
