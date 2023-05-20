import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import { global } from "styled-jsx/css";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
console.log(styles);

export default function Home() {
  return (
    /* <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Aditi Singh" />
        <meta name="description" content="I design and develop websites" />
        <meta
          name="keywords"
          content="front-end developer, aditi singh, aditi, singh, UI-UX, coding, development, Javascript, css, portfolio, freelance, Jodhpur, front-end, programming"
        />
        <meta name="author" content="Aditi Singh(Alpha_Sierra)" />

        <link
          rel="icon"
          href="./assets/logo-for-favicon-removebg-previe-copy.png"
        />

        
        <nextscript
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2D2HKDTNKH"
        ></nextscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "G-2D2HKDTNKH");
            `,
          }}
        /> 
      </Head> */

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
