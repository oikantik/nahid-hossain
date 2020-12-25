import Head from "next/head";
import BlogList from "../components/BlogList";
import CurrentlyWorkingOn from "../components/CurrentlyWorkingOn";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import Thankyou from "../components/Thankyou";

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Welcome | Nahid Hossain</title>
      </Head>
      <main>
        <Sidebar />
        <Projects />
        <CurrentlyWorkingOn />
        <BlogList />
        <Thankyou />
      </main>
    </div>
  );
}
