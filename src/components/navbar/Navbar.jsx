"use client";

import Link from "next/link";
import { links } from "@/constant";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"}>*Rulblog</Link>
      <div>
        {links.map((link) => (
          <Link href={`${link.url}`} key={link.id}>
            {link.title}
          </Link>
        ))}
        <button onClick={() => console.log("log out")}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
