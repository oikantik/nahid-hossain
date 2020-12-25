import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import Link from "next/link";
//import useDarkMode from "use-dark-mode";

function BlogList() {
  return (
    <Fragment>
      <section id='blog' className='blog-list-component'>
        <h1 className='blog-list-component__title'>Blog Posts</h1>
        <p className='blog-list-component__description'>
          Yeah, sometimes I like to write too!
        </p>
        <article className='blog-list-component-card'>
          <h2 className='blog-list-component-card__title'>
            How to add a hamburger menu to your react site
          </h2>
          <p className='blog-list-component-card__description'>
            Yet another tutorial on how to add a hamburger menu to your react
            website without any third party library, using hooks.
          </p>
          <p className='blog-list-component-card__urls'>
            <Link href='/blog/add-hamburger-menu-to-your-react-website'>
              <a className='blog-list-component-card__url'>
                Read More <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </Link>
          </p>
        </article>
      </section>
    </Fragment>
  );
}

export default BlogList;
