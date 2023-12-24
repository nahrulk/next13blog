import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./../../public/hero.svg";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={"homeTitle"}>Welcome To my Blog, Bruuh!</h1>
        <p className={styles.desc}>
          People come and go, but you now come. how lucky you are to know me
          &#128523;
        </p>
        <Button text={"See My Porfolio"} url={"/portfolio"} />
      </div>
      <div className={styles.item}>
        <Image
          src={Hero}
          alt="A person working on a computer"
          className={styles.img}
        />
      </div>
    </div>
  );
}
