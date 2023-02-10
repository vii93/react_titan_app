import { Grid } from "@mui/material";
import React, { FC, useState } from "react";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";


interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { t, i18n } = useTranslation();
  const changeLanguageHandler = (e: any) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }

  const [temp, setTemp] = useState(0)
  // setTimeout(() => {setTemp(preTemp => preTemp + 1)}, 10000)

  return (
    <div className={styles.Header + " hover:bg-blue-700"} data-testid="Header">
      <Grid container spacing={2}>
        <Grid item xs={9}>
          {temp}
        </Grid>
        <Grid item xs={3}>
          <select
            className="custom-select"
            style={{ width: 200 }}
            onChange={changeLanguageHandler}
          >
            <option value="en">English</option>
            <option value="vi">Viet Nam</option>
          </select>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
