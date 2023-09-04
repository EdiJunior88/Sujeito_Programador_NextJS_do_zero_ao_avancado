import React from "react";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import heroImg from "../../public/assets/hero.png";

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt='logo Tarefas+'
            src={heroImg}
            priority
          />
        </div>

        <h1 className={styles.title}>
          Sistema feito para você organizar <br />
          seus estudos e tarefas
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+12 posts</span>
          </section>

          <section className={styles.box}>
            <span>+90 comentários</span>
          </section>
        </div>
      </main>
    </div>
  );
}
