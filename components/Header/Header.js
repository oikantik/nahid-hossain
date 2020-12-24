import useDarkMode from "use-dark-mode";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const darkMode = useDarkMode(false);
  const [menu, setMenu] = useState(false);
  const handleSetMenu = () => {
    setMenu(!menu);
  };
  return (
    <Fragment>
      <div className='header'>
        <div className='header-menu'>
          <FontAwesomeIcon
            icon={faBars}
            className={
              darkMode.value === false
                ? "header-menu__icon"
                : "header-menu__icon header-menu__icon--dark"
            }
            onClick={handleSetMenu}
          />
        </div>
        <label className='switch'>
          <input
            className='switch__input'
            type='checkbox'
            defaultChecked={darkMode.value}
            onChange={darkMode.toggle}
          />
          <span className='switch__slider switch__slider--round'></span>
        </label>
      </div>

      {menu && (
        <div className='drawer-menu'>
          <nav className='drawer-menu-nav'>
            <ul className='drawer-menu-nav__items'>
              <li className='drawer-menu-nav__item'>Coming Soon!</li>
              <li className='drawer-menu-nav__item'>Coming Soon!</li>
              <li className='drawer-menu-nav__item'>Coming Soon!</li>
            </ul>
          </nav>
        </div>
      )}
    </Fragment>
  );
}

export default Header;
