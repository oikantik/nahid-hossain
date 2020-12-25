import useDarkMode from "use-dark-mode";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const darkMode = useDarkMode(false);
  const navMenu = useRef(null);
  const [menu, setMenu] = useState(false);
  const handleSetMenu = () => {
    setMenu(!menu);
  };

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

      {menu && (
        <div className='drawer-menu' ref={navMenu}>
          <nav className='drawer-menu-nav'>
            <FontAwesomeIcon
              icon={faTimes}
              className='drawer-menu-nav__close-icon'
              onClick={() => setMenu(false)}
            />
            <ul
              className='drawer-menu-nav__items'
              onClick={() => setMenu(false)}>
              <li className='drawer-menu-nav__item'>
                <Link href='/'>Home</Link>
              </li>
              <li className='drawer-menu-nav__item'>
                <Link href='/#projects'>Projects</Link>
              </li>
              <li className='drawer-menu-nav__item'>
                <Link href='/#currently-working'>Working On</Link>
              </li>
              <li className='drawer-menu-nav__item'>
                <Link href='/#blog'>Blog</Link>
              </li>
              <li className='drawer-menu-nav__item'>
                <Link href='/#thankyou'>Thank you</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </Fragment>
  );
}

export default Header;
