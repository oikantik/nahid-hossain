import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDarkMode from "use-dark-mode";

function Sidebar() {
  const darkMode = useDarkMode(false);

  return (
    <div className='sidebar'>
      <h1
        className={
          darkMode.value === false
            ? "sidebar__title"
            : "sidebar__title sidebar__title--dark"
        }>
        Hi! I am Nahid!
      </h1>
      <p
        className={
          darkMode.value === false
            ? "sidebar__paragraph"
            : "sidebar__paragraph sidebar__paragraph--dark"
        }>
        I am a fullstack developer. I currently live in Toronto, Ontario. My
        favorite technologies right now are HapiJS, React and MySQL!
      </p>
      <div className='sidebar-connect'>
        <a
          href='https://www.linkedin.com/in/md-nahid-hossain/'
          target='_blank'
          rel='noref'
          className={
            darkMode.value === false
              ? "sidebar-connect-icons"
              : "sidebar-connect-icons sidebar-connect-icons--dark"
          }>
          <FontAwesomeIcon
            icon={faLinkedin}
            className={
              darkMode.value === false
                ? "sidebar-connect-icons__social"
                : "sidebar-connect-icons__social sidebar-connect-icons__social--dark"
            }
          />
          <span
            className={
              darkMode.value === false
                ? "sidebar-connect-icons__text"
                : "sidebar-connect-icons__text sidebar-connect-icons__text--dark"
            }>
            LinkedIn
          </span>
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className={
              darkMode.value === false
                ? "sidebar-connect-icons__link"
                : "sidebar-connect-icons__link sidebar-connect-icons__link--dark"
            }
          />
        </a>

        <a
          href='https://github.com/oikantik'
          target='_blank'
          rel='noref'
          className={
            darkMode.value === false
              ? "sidebar-connect-icons"
              : "sidebar-connect-icons sidebar-connect-icons--dark"
          }>
          <FontAwesomeIcon
            icon={faGithub}
            className={
              darkMode.value === false
                ? "sidebar-connect-icons__social"
                : "sidebar-connect-icons__social sidebar-connect-icons__social--dark"
            }
          />
          <span
            className={
              darkMode.value === false
                ? "sidebar-connect-icons__text"
                : "sidebar-connect-icons__text sidebar-connect-icons__text--dark"
            }>
            Github
          </span>
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className={
              darkMode.value === false
                ? "sidebar-connect-icons__link"
                : "sidebar-connect-icons__link sidebar-connect-icons__link--dark"
            }
          />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
