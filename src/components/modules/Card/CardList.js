import React from 'react';
import styles from './styles.module.scss';

const CardList = ({ children }) => {
  return <div className={styles.cardList}>{children}</div>;
};

export default CardList;
