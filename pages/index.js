import Head from "next/head";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Welcome | Nahid Hossain</title>
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
      <main>
        <Sidebar />
      </main>
    </div>
  );
}
