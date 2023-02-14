import React, { FC } from 'react';
import styles from './EmptyList.module.css';

interface EmptyListProps {}

const EmptyList: FC<EmptyListProps> = () => (
  <div className={styles.EmptyList} data-testid="EmptyList">
    EmptyList Component
  </div>
);

export default EmptyList;
