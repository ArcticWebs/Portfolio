import styles from "./Footer.module.scss";
import clsx from "clsx";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={clsx("container", styles.footerWrapper)}>
        <h3>Contact</h3>
        <div className={styles.footerInfo}>
          <p>
            Pisanie testów jest często codziennością programistów (a na pewno
            Testerów :)). Testy mają tym większe znaczenie w językach
            dynamicznych (np. JavaScript), które (w odróżnieniu od języków
            statycznych (np. Java, Elm, Haskell)) nie wymagają deklaracji typu
            danych, gdy tworzymy zmienne, stałe, czy funkcje.
          </p>
          <a href="mailto:kiedrowska.ania@gmail.com">
            <MdOutlineEmail />
            kiedrowska.ania@gmail.com
          </a>
          <a href="tel:+48111111111">
            <FiPhone />
            +48 111 111 111
          </a>
          <div className={styles.footerIcons}>
            <a href="https://www.linkedin.com/in/anna-kiedrowska-98891b230/">
              <IoLogoLinkedin />
            </a>
            <a href="https://github.com/ArcticWebs">
              <IoLogoGithub />
            </a>
            <a>
              <IoLogoInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
