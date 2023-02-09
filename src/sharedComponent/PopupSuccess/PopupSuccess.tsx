import React, { FC } from 'react';
import styles from './PopupSuccess.module.css';

interface PopupSuccessProps {}

const PopupSuccess: FC<PopupSuccessProps> = () => (
  <div className={styles.PopupSuccess} data-testid="PopupSuccess">
    PopupSuccess Component
  </div>
);

export default PopupSuccess;
