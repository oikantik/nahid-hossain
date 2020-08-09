import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nahid Hossain</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-5863NWP');`,
          }}
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome!</h1>

        <p className={styles.description}>
          I don't have much to share right now, but I have big plans for this
          site.
          <br /> <br />
          In the meantime, why don't you visit my LinkedIn profile to know more?
          <br /> <br />
          And oh! GitHub too, since Sir Isaac Newton said,
          <br />
          "Life without GitHub is not a life worth living".
          <br /> <br />
          Just kidding :)
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.linkedin.com/in/md-nahid-hossain/"
            className={styles.card}
          >
            <h3>LinkedIn</h3>
            <p>Get to know me or Connect with me.</p>
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
