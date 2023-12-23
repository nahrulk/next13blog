import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          fill={true}
          alt="Image Header"
          className={styles.img}
          src={
            "https://images.pexels.com/photos/5745818/pexels-photo-5745818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <div className={styles.imageText}>
          <h1 className={styles.imageTitle}>Frontend Developer</h1>
          <h2 className={styles.imageDesc}>
            Analytics imaginator, for freedom with rules
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who am I?</h1>
          <p className={styles.desc}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              quis risus sed vulputate.{" "}
            </span>
            <br />
            <br />
            <span>
              Vestibulum lorem sed risus ultricies tristique nulla aliquet enim
              tortor. Bibendum est ultricies integer quis auctor elit sed. Eget
              mauris pharetra et ultrices neque ornare aenean.{" "}
            </span>
            <br />
            <br />
            <span>
              Nunc mattis enim ut tellus elementum sagittis vitae et.
              Scelerisque in dictum non consectetur a erat nam at lectus. Enim
              nec dui nunc mattis enim. Auctor neque vitae tempus quam
              pellentesque nec nam aliquam. Tortor at risus viverra adipiscing
              at in tellus integer feugiat.
            </span>
          </p>
        </div>
        <div className={styles.item}>
          <h1>Why Me?</h1>
          <p className={styles.desc}>
            Nunc mattis enim ut tellus elementum sagittis vitae et. Scelerisque
            in dictum non consectetur a erat nam at lectus. Enim nec dui nunc
            mattis enim. Auctor neque vitae tempus quam pellentesque nec nam
            aliquam. Tortor at risus viverra adipiscing at in tellus integer
            feugiat.
            <br />
            <br />
            - Yes thi is it
            <br />
            <br />- So do i
          </p>
          <Button text={"Contact"} url={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
