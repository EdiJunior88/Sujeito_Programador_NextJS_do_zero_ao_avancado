import type { Metadata } from "next";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import heroImg from "../../public/assets/hero.png";

export const metadata: Metadata = {
  title: "Tarefas+ | Organize suas tarefas de forma fácil",
  description: "Generated by Sujeito Programador",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

const Page = () => {
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
};

export default Page;
