"use client";

import Link from "next/link";
import { links } from "@/constant";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Rulblog &#10024;
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={`${link.url}`} key={link.id} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button
          onClick={() => console.log("log out")}
          className={styles.logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
