import React, { FC } from 'react';
import styles from './PopupInform.module.css';

interface PopupInformProps {}

const PopupInform: FC<PopupInformProps> = () => (
  <div className={styles.PopupInform} data-testid="PopupInform">
    PopupInform Component
  </div>
);

export default PopupInform;
