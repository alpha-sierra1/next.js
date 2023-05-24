import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
//import { global } from "styled-jsx/css";
import styles from "@/styles/Home.module.css";
// import additionalStyles from './Working.module.css';
import AboutPage from "./about";
import WorkSection from "./work";
import ContactPage from "./contact";

const inter = Inter({ subsets: ["latin"] });
//console.log(styles);

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={`${styles.introduction} ${styles["flex-intro"]}`}>
          <a
            href="/about.html"
            id="anchor"
            className={`${styles.helloTag} ${styles["working-anchor"]}`}
          ></a>
          {/* <p className={styles.about}>About</p> */}
          <a
            href="/work.html"
            id="anchor"
            className={`${styles["hello-tag1"]} ${styles["working-anchor-1"]}`}
          ></a>
          <a
            href="/contact.html"
            id="anchor"
            className={`${styles["hello-tag2"]} ${styles["working-anchor-2"]}`}
          ></a>
        </div>
      </section>
    </main>
    // </div>
  );
}

const about = () => {
  return (
    <div>
      <h1>Welcome to my Next.js website!</h1>
      <AboutPage />
    </div>
  );
};

const work = () => {
  return (
    <div>
      <h1>Welcome to my Next.js website!</h1>
      <WorkSection />
    </div>
  );
};

const contact = () => {
  return (
    <div>
      <h1>Welcome to my Next.js website!</h1>
      <ContactPage />
    </div>
  );
};
