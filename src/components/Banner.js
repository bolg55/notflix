import styles from "../styles/Banner.module.css";
import { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 / 20%)),url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
      <div className={styles.bannerContents}>
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className={styles.bannerButtons}>
          <button className={styles.btn}>Play</button>
          <button className={styles.btn}>My List</button>
        </div>
        <h2 className={styles.Description}>{truncate(movie?.overview, 250)}</h2>
        <div className={styles.fadeBottom}></div>
      </div>
    </header>
  );
};

export default Banner;
