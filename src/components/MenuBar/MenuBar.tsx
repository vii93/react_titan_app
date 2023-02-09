import React, { FC } from 'react';
import styles from './MenuBar.module.css';

interface MenuBarProps {}

const MenuBar: FC<MenuBarProps> = () => (
  <div className={styles.MenuBar} data-testid="MenuBar">
    MenuBar Component
  </div>
);

export default MenuBar;
