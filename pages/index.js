import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nahid Hossain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome!</h1>

        <p className={styles.description}>
          I don't have much to share right now, but I have big plans for this
          site. In the meantime, why don't you visit my linked in account to
          know more? And oh! GitHub too, since Sir Isaac Newton said, "Life
          without GitHub is not a life worth living". Just kidding :)
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.linkedin.com/in/md-nahid-hossain/"
            className={styles.card}
          >
            <h3>LinkedIn &rarr;</h3>
            <p>Get to know me or connect with me.</p>
          </a>

          <a href="https://github.com/oikantik" className={styles.card}>
            <h3>GitHub</h3>
            <p>Check my repositories!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
