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

interface HomeProps {
  name?: string
}

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
      <div>Home</div>
      
    </div>
  );
};

export default Home;
