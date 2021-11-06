import React from 'react';
import { PropTypes } from 'prop-types';
import clsx from 'clsx';
import styles from './styles.module.scss';

const propTypes = {
  as: PropTypes.string,
  size: PropTypes.oneOf(['headline', 'primary', 'secondary', 'tertiary']),
};

const Text = ({ children, as: Element = 'p', size = 'primary' }) => {
  const textClassnames = clsx(styles.text, styles[size]);

  return <Element className={textClassnames}>{children}</Element>;
};

Text.propTypes = propTypes;

export default Text;
