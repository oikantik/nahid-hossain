import "../styles/globals.scss";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { Fragment, useEffect, useState } from "react";

import "nprogress/nprogress.css";
import Loading from "../components/Loading";
import Header from "../components/Header";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(faBars);

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => setLoading(false));
  return (
    <Fragment>
      {loading && <Loading />}
      {!loading && (
        <Fragment>
          <Head>
            <link rel='icon' href='/favicon.ico' />
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
          <Header />
          <Component {...pageProps} />
        </Fragment>
      )}
    </Fragment>
  );
}

export default MyApp;
