import React from 'react';
import { PropTypes } from 'prop-types';
import clsx from 'clsx';
import styles from './styles.module.scss';

const propTypes = {
  className: PropTypes.string,
  as: PropTypes.string,
  size: PropTypes.oneOf(['headline', 'primary', 'secondary', 'tertiary']),
  children: PropTypes.node,
};

const Text = ({ children, as: Element = 'p', size = 'primary', className }) => {
  const textClassnames = clsx(styles.text, styles[size], className);

  return <Element className={textClassnames}>{children}</Element>;
};

Text.propTypes = propTypes;

export default Text;
