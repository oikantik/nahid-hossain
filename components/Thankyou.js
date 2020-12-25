import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
//import useDarkMode from "use-dark-mode";

function Thankyou() {
  return (
    <section id='thankyou'>
      <div className='thankyou'>
        <h1 className='thankyou__title'>Thank you!</h1>
        <p className='thankyou__description'>
          I also do wordpress development (here are two most recent examples:
          <br />
          Demo 1{" "}
          <a
            href='https://doctorjac.com/'
            target='_blank'
            rel='noreferrer'
            className='thankyou__description thankyou__description--link'>
            (Traditional wordpress site)
          </a>
          ,<br />
          Demo 2{" "}
          <a
            href='https://stealthseminaru.com/'
            target='_blank'
            rel='noreferrer'
            className='thankyou__description thankyou__description--link'>
            {" "}
            (Membership site using ontraport
          </a>
          )<br />
          as side hustles. In any case, contact me directly by my{" "}
          <a
            href='mailto:oikantik@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='thankyou__description thankyou__description--link'>
            email
          </a>{" "}
          or connect with me!
        </p>

        <div className='thankyou-connect'>
          <a
            href='https://www.linkedin.com/in/md-nahid-hossain/'
            target='_blank'
            rel='noref'
            className='thankyou-connect-icons'>
            <FontAwesomeIcon
              icon={faLinkedin}
              className='thankyou-connect-icons__social'
            />
            <span className='thankyou-connect-icons__text'>LinkedIn</span>
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className='thankyou-connect-icons__link'
            />
          </a>

          <a
            href='https://github.com/oikantik'
            target='_blank'
            rel='noref'
            className='thankyou-connect-icons'>
            <FontAwesomeIcon
              icon={faGithub}
              className='thankyou-connect-icons__social'
            />
            <span className='thankyou-connect-icons__text'>Github</span>
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className='thankyou-connect-icons__link'
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Thankyou;
