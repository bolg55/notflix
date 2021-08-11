/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${show && `${styles.navBlack}`}`}>
      <Link href='/'>
        <a>
          <img className={styles.logo} src='/notflix.png' alt='notflix' />
        </a>
      </Link>
      <img className={styles.icon} src='/netflix_icon.png' alt='netflix icon' />
    </div>
  );
};

export default Navbar;
