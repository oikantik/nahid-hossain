import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <section id='projects' className='projects'>
      <h1 className='projects__title'>Projects</h1>
      <p className='projects__description'>
        P.S: This is not an exhaustive list!
      </p>
      <article className='projects-card'>
        <h2 className='projects-card__title'>ULearn</h2>
        <p className='projects-card__description'>
          A learning management system where you can create as many courses and
          lectures you want. Made with React, Express, MySql, Firebase,
          Redux-Saga (work in progress).
        </p>
        <p className='projects-card__urls'>
          <a
            href='https://ulearn.netlify.app/'
            rel='nofollow'
            target='_blank'
            className='projects-card__url'>
            Visit Website <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </p>
      </article>

      <article className='projects-card'>
        <h2 className='projects-card__title'>Material SaaS Template</h2>
        <p className='projects-card__description'>
          Software as a Service template created using React and Material UI.
          This comes with a minimalistic design along with a landing, login,
          registration, and profile page.
        </p>
        <p className='projects-card__urls'>
          <a
            href='https://blissful-pare-85614b.netlify.app/'
            rel='nofollow'
            target='_blank'
            className='projects-card__url'>
            Visit Website <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </p>
      </article>

      <article className='projects-card'>
        <h2 className='projects-card__title'>SaaS Boilerplate</h2>
        <p className='projects-card__description'>
          This will help developers who are just starting, so that they can
          easily start with their projects rather than spending time adding
          solid user authentication
        </p>
        <p className='projects-card__urls'>
          <a
            href=''
            rel='nofollow'
            target='_blank'
            className='projects-card__url'>
            Visit Website <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </p>
      </article>

      <article className='projects-card'>
        <h2 className='projects-card__title'>
          Vanilla Calculator and Calendar
        </h2>
        <p className='projects-card__description'>
          Simple calculator and calendar apps created using vanilla js and Sass.
        </p>
        <p className='projects-card__urls'>
          <a
            href='https://zealous-edison-9be12a.netlify.app/'
            rel='nofollow'
            target='_blank'
            className='projects-card__url'>
            Calculator <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>{" "}
          |{" "}
          <a
            href='https://xenodochial-wescoff-62711f.netlify.app/'
            rel='nofollow'
            target='_blank'
            className='projects-card__url'>
            {" "}
            Calendar <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </p>
      </article>
    </section>
  );
}

export default Projects;
