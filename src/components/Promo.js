import styles from "../styles/Promo.module.css"
import Image from "next/image"
import pic1 from "../../public/tv.png"
import pic2 from "../../public/mobile-0819.jpg"
import pic3 from "../../public/device-pile.png"

export default function Promo() {
  return (
    <div className={styles.services}>
      <div className={styles.underline}></div>
      <div className={styles.container}>
        <div className={styles.col1}>
          <h2>Enjoy on your TV.</h2>
          <h4>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h4>
        </div>
        <div className={styles.col2}>
          <Image src={pic1} alt='web development' loading='lazy' />
        </div>
      </div>
      <div className={styles.underline}></div>
      <div className={`${styles.container} ${styles.containerOpp}`}>
        <div className={styles.col2}>
          <Image src={pic2} alt='coding' loading='lazy' />
        </div>
        <div className={styles.col1}>
          <h2>Download your shows to watch offline.</h2>
          <h4>
            Save your favorites easily and always have something to watch.
          </h4>
        </div>
      </div>
      <div className={styles.underline}></div>
      <div className={styles.container}>
        <div className={styles.col1}>
          <h2>Watch everywhere.</h2>
          <h4>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h4>
        </div>
        <div className={styles.col3}>
          <Image src={pic3} alt='SEO' loading='lazy' />
        </div>
      </div>
      <div className={styles.underline}></div>
    </div>
  )
}
