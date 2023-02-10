import { Grid } from "@mui/material";
import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuBar from "../MenuBar/MenuBar";
import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
// import { incremented } from '../../features/counter/counter-slice'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { t, i18n } = useTranslation();
  const value = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const handleClick = () => {
    // dispatch(incremented());
  }
  return (
    <div className={styles.Home} data-testid="Home">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <MenuBar />
            </Grid>
            <Grid item xs={9}>
              <div>{t('title')}</div>
              <p>
                <button onClick={handleClick}>Count is {value}</button>
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
