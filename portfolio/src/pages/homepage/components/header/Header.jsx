import styles from "./Header.module.scss";
import avatar from "assets/Avatar.svg";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={clsx("container", styles.header)}>
      <img
        src={avatar}
        alt="Junior Frontend Developer - Anna Kiedrowska - HTML, CSS, JavaScript, React"
      />
      <h1>
        I do code and make contet <span>about it!</span>
      </h1>
    </header>
  );
};

export default Header;
