/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src='/notflix.png' alt='notflix' />
    </div>
  );
};

export default Navbar;
