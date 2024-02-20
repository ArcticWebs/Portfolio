import styles from "./NotFoundPage.module.scss";
import clsx from "clsx";

const NotFoundPage = () => {
  return (
    <div className={clsx("container", styles.wrapper)}>
      <h2>Page not found...</h2>
    </div>
  );
};
export default NotFoundPage;
