"use client";

import React, { useContext } from "react";
import styles from "./darkModeToogle.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  let { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>&#127769;</div>
      <div className={styles.icon}>&#128262;</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
