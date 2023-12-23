import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch &#128075;</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            alt="Contact Image"
            className={styles.img}
            src={"/contact.svg"}
          />
        </div>
        <form className={styles.form}>
          <input placeholder="name" className={styles.input} type="text" />
          <input placeholder="email" className={styles.input} type="email" />
          <textarea
            className={styles.textarea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button text={"Send"} url={"#"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
