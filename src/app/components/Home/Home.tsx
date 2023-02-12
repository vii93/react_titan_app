import React, { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import styles from './Home.module.css';

interface HomeProps {
  name?: string
}

const Home: FC<HomeProps> = (props) => (
  <div className={styles.Home} data-testid="Home">
    <Header />
    <MenuBar />
    <div className={`text-center sm:${styles.titlesm}`}>Home Component {props.name ? props.name : "Guest"}</div>
    <Footer />
  </div>
);

export default Home;
