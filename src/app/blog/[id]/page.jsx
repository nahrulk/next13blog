import React from "react";
import styles from "./id.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem Ipsum Dolor Sit Amet</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            facilis cum debitis aliquid minus? Ab, ducimus, alias illum voluptas
            cum, amet cumque tenetur placeat eveniet dolorem sed hic veritatis
            eius!
          </p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              src={
                "https://images.pexels.com/photos/14587417/pexels-photo-14587417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="Avatar"
              width={40}
              height={40}
            />
            <span className={styles.username}>Nahrul K</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt="Thumbnail"
            src={
              "https://images.pexels.com/photos/707670/pexels-photo-707670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eos
          cumque dolorum quae fugit consequatur ipsam, ullam ratione quis animi
          officiis qui! Ad ullam repellat qui fugiat natus quam quae.
          <br />
          <br />
          Recusandae delectus facilis ab eaque numquam, tempore eveniet quaerat
          quo ut culpa! Praesentium vel suscipit laudantium earum placeat
          recusandae facilis illum numquam, exercitationem impedit hic
          reprehenderit nesciunt, quam ullam voluptatem?
          <br />
          <br />
          Magnam blanditiis quia id hic eveniet rem reprehenderit cum nihil
          perspiciatis nulla, consectetur facere eum possimus totam, sunt harum
          nesciunt adipisci! Blanditiis error pariatur commodi explicabo
          corrupti distinctio ducimus alias.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
