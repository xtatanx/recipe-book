import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Hero = ({ backUrl }) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.backBtn} to={backUrl}>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </Link>
    </div>
  );
};

export default Hero;
