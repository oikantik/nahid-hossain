import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import Loading from "../../components/Loading";
import Prism from "prismjs";
import Image from "next/image";
import "prismjs/components/prism-jsx";

export default function Home() {
  const router = useRouter();
  const { pageslug } = router.query;

  useEffect(() => {
    Prism.highlightAll();
  });

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
          <span className='blog-post__author-info'>
            <span className='blog-post__author-title'>Author:</span> Nahid
            Hossain
          </span>
          <span className='blog-post__time-to-read'>5min Read</span>
          <div className='blog-post__paragraph'>
            You have eaten hamburgers, if you are like I am, you probably do not
            like them. But hamburger menu? That is a totally different story. I
            do not know who came up with it first, but I just love the idea.
            Lets get right into it.
          </div>

          <div className='blog-post__paragraph'>
            We will not go through setting up a react app, I am guessing you
            already know how to.
          </div>

          <div className='blog-post__paragraph'>
            We will work on the default App.js that comes with create-react-app.
            This is how we are starting:
            <pre className='language-jsx'>
              <code>
                {`
import React from 'React';
function App() {
  return <p>Hello World</p>
}
export default App;
`}
              </code>
            </pre>
          </div>

          <div className='blog-post__paragraph'>
            Lets import useState, useEffect and useRef from React, and install
            fontawesome (check{" "}
            <a
              href='https://fontawesome.com/how-to-use/on-the-web/using-with/react'
              target='_blank'
              rel='noreferrer'
              className='blog-post__link'>
              this
            </a>{" "}
            tutorial to see how to install it). Our code now looks like. We
            haven't done anything except for adding some dependencies
            <pre className='language-jsx'>
              <code>
                {`
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function App() {
  return <p>Hello World</p>
}
export default App;
`}
              </code>
            </pre>
          </div>

          <div className='blog-post__paragraph'>
            First we will set a state that will have a default value of false.
            We will add a click handler, that will toggle the switch, so when
            clicked, if false, it will return true, when true, will return false
            <pre className='language-jsx'>
              <code>
                {`
...
const [menu, setMenu] = useState(false);
const handleMenuShow = () => {
  setMenu(!menu);
}
return <p>Hello World</p>
}
...
`}
              </code>
            </pre>
          </div>

          <div className='blog-post__paragraph'>
            We will use fontawesome icon to show the hamburger menu and add an
            onClick handler to it. We will use short circuit to show some things
            based one when the previously declared state of menu is true
            <pre className='language-jsx'>
              <code>
                {`
...
  return (<div>
    <FontAwesomeIcon icon={faBars} onClick={handleMenuShow}/>
    {menu && <nav>Short Circuit!</nav>}
  </div>)
}
...
`}
              </code>
            </pre>
          </div>

          <div className='blog-post__paragraph'>
            This is how it looks like. Works great right? No. If you click on
            the menu, it does open up the nav, but the caveat is that if you
            click anywhere else on the page, it does not go away. That is not
            how it should be.
            <img
              src='/assets/blog/1/menu.gif'
              alt='menu'
              className='blog-post__images'
            />
          </div>

          <div className='blog-post__paragraph'>
            We will fix that. This is where we will use useRef. We will initiate
            a variable called navMenu, set the useRef to be null. We will use
            UseEffect to listen to document's mousedown event, and if the DOM
            element we are clicking on does not match the navMenu, we will close
            it. Here is how the final code looks like.
            <pre className='language-jsx'>
              <code>
                {`
...

const navMenu = useRef(null);
const [menu, setMenu] = useState(false);
const handleMenuShow = () => {
  setMenu(!menu);
}

useEffect(() => {
  document.addEventListener("mousedown", (e) => {
    if (
      navMenu.hasOwnProperty("current") &&
      navMenu.current !== null &&
      !navMenu.current.contains(e.target)
    ) {
      setMenu(false);
    }
  });
  return () => {
    document.addEventListener("mousedown", (e) => {
      setMenu(!menu);
    });
  };
}, [menu]);

return (<div>
  <FontAwesomeIcon icon={faBars} onClick={handleMenuShow}/>
  {menu && <nav ref={navMenu}>
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
      </ul>
    </nav>}
</div>)
}
...
`}
              </code>
            </pre>
            And this is how it looks like
          </div>
          <img
            src='/assets/blog/1/menu-final.gif'
            alt='menuFinal'
            className='blog-post__images'
          />
          <div className='blog-post__paragraph'>
            Feel free to contact me if you run into any issue or if you need any
            help!
          </div>
        </section>
      </Fragment>
    );
  }
  return <Loading />;
}
