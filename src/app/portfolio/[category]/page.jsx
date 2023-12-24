import React from "react";
import styles from "./category.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem Ipsum Sit Amet</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            quibusdam natus, adipisci eos voluptas quo? Deserunt voluptatem
            nihil saepe, perferendis id similique? Consequuntur cum accusamus
            repellat ipsum iste incidunt maiores!
          </p>
          <Button text={"See more"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill="true"
            src={
              "https://images.pexels.com/photos/18886219/pexels-photo-18886219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={`${params?.category}`}
          />
        </div>
      </div>
      {/*  */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Lorem Ipsum Sit Amet</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            quibusdam natus, adipisci eos voluptas quo? Deserunt voluptatem
            nihil saepe, perferendis id similique? Consequuntur cum accusamus
            repellat ipsum iste incidunt maiores!
          </p>
          <Button text={"See more"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill="true"
            src={
              "https://images.pexels.com/photos/18863517/pexels-photo-18863517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={`${params?.category}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
