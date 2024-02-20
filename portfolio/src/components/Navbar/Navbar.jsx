import styles from "./Navbar.module.scss";
import clsx from "clsx";
import logo from "assets/logo.svg";
import { navOptions } from "data/navOptions";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1024) {
      setShowMenu(false);
    }
  };
  return (
    <nav className={styles.navContainer}>
      <div className={clsx("container", styles.navbar)}>
        <div className={styles.logoBox}>
          <img src={logo} alt="my logo" className={styles.logo} />
          <h2>Anna Kiedrowska</h2>
        </div>
        <div className={clsx(styles.menu, showMenu && styles.showMenu)}>
          <ul className={styles.navLinks}>
            {navOptions.map((option) => (
              <li key={nanoid()}>
                {option.isScroll && <a href={option.path}>{option.name}</a>}
                {!option.isScroll && (
                  <Link to={option.path} onClick={closeMenuOnMobile}>
                    {option.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.navBtn} onClick={toggleMenu}>
          {showMenu ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
