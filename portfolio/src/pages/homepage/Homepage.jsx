import Header from "./components/header/Header";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <Header />
    </main>
  );
};

export default Homepage;
