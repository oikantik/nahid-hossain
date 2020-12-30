import Head from "next/head";
import { Fragment } from "react";
import BlogList from "../../components/BlogList";

export default function BlogPosts() {
  return (
    <Fragment>
      <Head>
        <title>Blog posts | Nahid Hossain</title>
      </Head>
      <section className='blog-post'>
        <BlogList />
      </section>
    </Fragment>
  );
}
