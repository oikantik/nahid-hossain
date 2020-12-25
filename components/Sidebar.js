import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
//import useDarkMode from "use-dark-mode";

function Sidebar() {
  return (
    <Fragment>
      <div className='sidebar'>
        <h1 className='sidebar__title'>Hi! I am Nahid!</h1>
        <p className='sidebar__paragraph'>
          I am a fullstack developer. I currently live in Toronto, Ontario. My
          favorite technologies right now are HapiJS, React and MySQL!
        </p>
        <div className='sidebar-connect'>
          <a
            href='https://www.linkedin.com/in/md-nahid-hossain/'
            target='_blank'
            rel='noref'
            className='sidebar-connect-icons'>
            <FontAwesomeIcon
              icon={faLinkedin}
              className='sidebar-connect-icons__social'
            />
            <span className='sidebar-connect-icons__text'>LinkedIn</span>
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className='sidebar-connect-icons__link'
            />
          </a>

          <a
            href='https://github.com/oikantik'
            target='_blank'
            rel='noref'
            className='sidebar-connect-icons'>
            <FontAwesomeIcon
              icon={faGithub}
              className='sidebar-connect-icons__social'
            />
            <span className='sidebar-connect-icons__text'>Github</span>
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className='sidebar-connect-icons__link'
            />
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;
