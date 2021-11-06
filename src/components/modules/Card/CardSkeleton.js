import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './styles.module.scss';
import Spacer from '../../elements/Spacer';

const CardSkeleton = () => {
  return (
    <div>
      <div className={styles.title}>
        <Skeleton height={32}></Skeleton>
      </div>
      <Spacer y={8}></Spacer>
      <Skeleton height={280}></Skeleton>
    </div>
  );
};

export default CardSkeleton;
