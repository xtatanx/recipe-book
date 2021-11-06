import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Hero from '../../elements/Hero';
import Text from '../../elements/Text';
import Spacer from '../../elements/Spacer';
import styles from './styles.module.scss';

const propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  to: PropTypes.string,
};

const Card = ({ imageSrc, imageAlt = '', title, to }) => {
  const CardWrapper = to ? Link : 'div';
  const linkProps = to ? { to: to } : {};

  return (
    <CardWrapper className={styles.wrapper} {...linkProps}>
      <Text as="h2" size="headline" className={styles.title}>
        {title}
      </Text>
      <Spacer y={8}></Spacer>
      <Hero
        className={styles.media}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        size="card"
      ></Hero>
    </CardWrapper>
  );
};

Card.propTypes = propTypes;

export default Card;
