import { Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuBar from "../MenuBar/MenuBar";
import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";
import { useAppSelector } from '../../app/hooks'
// import { incremented } from '../../features/counter/counter-slice'
import { useFetchBreedsQuery } from '../../features/dogs/dogs-api-slice';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { t } = useTranslation();
  const value = useAppSelector((state) => state.counter.value)
  // const dispatch = useAppDispatch()
  const [size, setSize] = useState(10)
  const { data } = useFetchBreedsQuery(size)

  useEffect(() => {
    console.log("kkkkkkkkkkk   ||")
    console.log(data)
  }, [data])
  const handleClick = () => {
    // dispatch(incremented());
  }
  const changeSize = (size: any) => {
    console.log("dddddd   ||", size.target.value)
    setSize(size.target.value)
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
              <p>
              <small>hello friend there is what i learn in react</small>
              </p>
              <select name="sizePage" id="dogs-size" onChange={changeSize}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              <div>Number of dogs is : {data?.length}</div>
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
