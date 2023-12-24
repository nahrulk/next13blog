import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href={`/blog/testid`} className={styles.linkContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/6488104/pexels-photo-6488104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem Ipsum Dolor Sit Amet</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            neque. Quae architecto harum quis voluptatem, facilis adipisci
            exercitationem! Voluptatum quibusdam beatae quam minima aliquid ea
            adipisci hic nulla voluptatibus cum.
          </p>
        </div>
      </Link>
      <Link href={`/blog/testid`} className={styles.linkContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/18741651/pexels-photo-18741651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem Ipsum Dolor Sit Amet</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            neque. Quae architecto harum quis voluptatem, facilis adipisci
            exercitationem! Voluptatum quibusdam beatae quam minima aliquid ea
            adipisci hic nulla voluptatibus cum.
          </p>
        </div>
      </Link>
      <Link href={`/blog/testid`} className={styles.linkContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/18971521/pexels-photo-18971521/free-photo-of-travel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem Ipsum Dolor Sit Amet</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            neque. Quae architecto harum quis voluptatem, facilis adipisci
            exercitationem! Voluptatum quibusdam beatae quam minima aliquid ea
            adipisci hic nulla voluptatibus cum.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
