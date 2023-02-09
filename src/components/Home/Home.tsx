import React, { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import styles from './Home.module.css';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
    <Header />
    <MenuBar />
    <div>Home Component</div>
    <Footer />
  </div>
);

export default Home;
