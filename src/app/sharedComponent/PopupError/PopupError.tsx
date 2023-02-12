import React, { FC } from 'react';
import styles from './PopupError.module.css';

interface PopupErrorProps {}

const PopupError: FC<PopupErrorProps> = () => (
  <div className={styles.PopupError} data-testid="PopupError">
    PopupError Component
  </div>
);

export default PopupError;
