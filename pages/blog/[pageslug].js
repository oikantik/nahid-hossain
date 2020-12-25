import Head from "next/head";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Loading from "../../components/Loading";

export default function Home() {
  const router = useRouter();
  const { pageslug } = router.query;
  if (pageslug === "add-hamburger-menu-to-your-react-website") {
    return (
      <Fragment>
        <Head>
          <title>
            How to add a hamburger menu to your react website | Nahid Hossain
          </title>
        </Head>
        <section className='blog-post'>
          <h1 className='blog-post__title'>
            How to add a hamburger menu to your react website
          </h1>
          <span className='blog-post__time-to-read'>5min Read</span>
          <p className='blog-post__paragraph'>
            You have eaten hamburgers, if you are like I am, you probably do not
            like them. But hamburger menu? That is a totally different story. I
            do not know who came up with it first, but I just love the idea.
          </p>
        </section>
      </Fragment>
    );
  }
  return <Loading />;
}
