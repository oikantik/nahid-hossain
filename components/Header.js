import useDarkMode from "use-dark-mode";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const darkMode = useDarkMode(false);
  const navMenu = useRef(null);
  const [menu, setMenu] = useState(false);
  const handleSetMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    console.log(router);
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
  }, []);

  return (
    <Fragment>
      <div className='header'>
        <div className='header-menu'>
          <FontAwesomeIcon
            icon={faBars}
            className='header-menu__icon'
            onClick={handleSetMenu}
          />
        </div>
        <label className='switch'>
          <input
            className='switch__input'
            type='checkbox'
            defaultChecked={darkMode.value}
            onChange={darkMode.toggle}
            onClick={darkMode.toggle}
          />
          <span className='switch__slider switch__slider--round'></span>
        </label>
      </div>

      <CSSTransition
        in={menu}
        timeout={300}
        classNames='drawer-menu'
        unmountOnExit>
        <div className='drawer-menu' ref={navMenu}>
          <FontAwesomeIcon icon={faTimes} className='drawer-menu__close-icon' />
          <nav className='drawer-menu-nav'>
            <ul
              className='drawer-menu-nav__items'
              onClick={() => setMenu(false)}>
              <li
                className={
                  router.asPath === "/"
                    ? "drawer-menu-nav__item drawer-menu-nav__item--active"
                    : "drawer-menu-nav__item"
                }>
                <Link href='/'>Home</Link>
              </li>
              <li
                className={
                  router.asPath === "/#projects"
                    ? "drawer-menu-nav__item drawer-menu-nav__item--active"
                    : "drawer-menu-nav__item"
                }>
                <Link href='/#projects'>Projects</Link>
              </li>
              <li
                className={
                  router.asPath === "/#currently-working"
                    ? "drawer-menu-nav__item drawer-menu-nav__item--active"
                    : "drawer-menu-nav__item"
                }>
                <Link href='/#currently-working'>Working On</Link>
              </li>
              <li
                className={
                  router.asPath === "/blog"
                    ? "drawer-menu-nav__item drawer-menu-nav__item--active"
                    : "drawer-menu-nav__item"
                }>
                <Link href='/blog'>Blog</Link>
              </li>
              <li className='drawer-menu-nav__item'>
                <FontAwesomeIcon
                  icon={faTimes}
                  className='drawer-menu-nav__close-icon'
                />
              </li>
            </ul>
          </nav>
        </div>
      </CSSTransition>
    </Fragment>
  );
}

export default Header;
