import React, { FC } from 'react';
import styles from './Table.module.css';

interface TableProps {}

const Table: FC<TableProps> = () => (
  <div className={styles.EmptyList} data-testid="Table">
    Table Component
  </div>
);

export default Table;
