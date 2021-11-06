import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './styles.module.scss';

const propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  size: PropTypes.oneOf(['big', 'medium']),
  children: PropTypes.node,
};

const Hero = ({ children, imageSrc, imageAlt = '', size = 'big' }) => {
  const wrapperClassnames = clsx(styles.wrapper, styles[size]);

  return (
    <div className={wrapperClassnames}>
      <img className={styles.image} src={imageSrc} alt={imageAlt} />
      {children && <div className={styles.contentBox}>{children}</div>}
    </div>
  );
};

Hero.propTypes = propTypes;

export default Hero;
