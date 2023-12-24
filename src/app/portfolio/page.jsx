import React from "react";
import styles from "./portfolio.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link className={styles.item} href={"/portfolio/illustration"}>
          <div className={styles.blackback} />
          <span className={styles.title}>Illustration</span>
        </Link>
        <Link className={styles.item} href={"/portfolio/websites"}>
          <div className={styles.blackback} />
          <span className={styles.title}>Websites</span>
        </Link>
        <Link className={styles.item} href={"/portfolio/applications"}>
          <div className={styles.blackback} />
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
