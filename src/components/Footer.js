import styles from "../styles/Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.underline}></div>
      <div className={styles.footer}>
        <h4>Interested in having a project built?</h4>
        <h4 className={styles.info}>
          Visit{" "}
          <span className={styles.website}>
            <a href='https://kellenbolger.ca'>kellenbolger.ca</a>
          </span>
        </h4>
      </div>
    </div>
  )
}
